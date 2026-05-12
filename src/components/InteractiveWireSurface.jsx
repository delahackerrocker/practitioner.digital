import { useEffect, useRef } from "react";
import * as THREE from "three";

const SIM_SIZE = 128;
const JACOBI_ITERATIONS = 6;

const VARIANTS = {
  hero: {
    cameraZ: 5.3,
    planeSize: 28,
    rotation: [28, 44, -8],
    position: [3.4, -0.8, 0],
    radius: 0.065,
    force: 240,
  },
  compact: {
    cameraZ: 5.3,
    planeSize: 28,
    rotation: [28, 44, -8],
    position: [3.4, -0.8, 0],
    radius: 0.065,
    force: 220,
  },
  case: {
    cameraZ: 4.5,
    planeSize: 32,
    rotation: [18, 56, 9],
    position: [4.8, -1.4, 0],
    radius: 0.052,
    force: 250,
  },
  contact: {
    cameraZ: 5.8,
    planeSize: 46,
    rotation: [30, 34, -12],
    position: [1.1, -0.7, 0],
    radius: 0.052,
    force: 240,
  },
};

const quadVertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const surfaceVertexShader = `
  uniform sampler2D uPressure;
  uniform float uTime;
  varying vec2 vUv;
  varying float vPressure;

  void main() {
    vUv = uv;

    float pressure = texture2D(uPressure, uv).r;
    float wideFold = sin((uv.x * 1.65 + uv.y * 0.58) * 3.14159 + uTime * 0.12);
    float crossFold = cos((uv.y * 1.2 - uv.x * 0.2) * 3.14159 + uTime * 0.08);

    vec3 pos = position;
    pos.z += pressure * 3.15;
    pos.z += wideFold * 0.46 + crossFold * 0.18;
    pos.x += pressure * 0.18;
    pos.y -= pressure * 0.08;

    vPressure = pressure;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const surfaceFragmentShader = `
  uniform vec3 uAccent;
  varying vec2 vUv;
  varying float vPressure;

  void main() {
    float intensity = smoothstep(0.015, 0.42, abs(vPressure));
    float edgeFade = smoothstep(0.0, 0.12, vUv.x) * (1.0 - smoothstep(0.78, 1.0, vUv.x));
    float verticalFade = smoothstep(0.0, 0.06, vUv.y) * (1.0 - smoothstep(0.94, 1.0, vUv.y));
    float alpha = mix(0.24, 0.95, intensity) * edgeFade * verticalFade;

    vec3 coolLine = vec3(0.42, 0.46, 0.58);
    vec3 brightLine = vec3(0.82, 0.86, 1.0);
    vec3 lineColor = mix(coolLine, brightLine, intensity);
    lineColor = mix(lineColor, uAccent, intensity * 0.38);

    gl_FragColor = vec4(lineColor, alpha);
  }
`;

const advectFragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 uPx;
  uniform vec2 uMouse;
  uniform vec2 uForce;
  uniform float uRadius;

  void main() {
    vec4 velocity = texture2D(uVelocity, vUv - texture2D(uVelocity, vUv).xy * uPx);
    velocity.xy *= 0.985;

    float distanceToMouse = distance(vUv, uMouse);
    float influence = smoothstep(uRadius, 0.0, distanceToMouse);
    velocity.xy += uForce * influence;

    gl_FragColor = vec4(velocity.xy, 0.0, 1.0);
  }
`;

const divergenceFragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 uPx;

  void main() {
    float left = texture2D(uVelocity, vUv - vec2(uPx.x, 0.0)).x;
    float right = texture2D(uVelocity, vUv + vec2(uPx.x, 0.0)).x;
    float bottom = texture2D(uVelocity, vUv - vec2(0.0, uPx.y)).y;
    float top = texture2D(uVelocity, vUv + vec2(0.0, uPx.y)).y;
    float divergence = (right - left + top - bottom) * 0.5;

    gl_FragColor = vec4(divergence, 0.0, 0.0, 1.0);
  }
`;

const jacobiFragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;
  uniform vec2 uPx;

  void main() {
    float left = texture2D(uPressure, vUv - vec2(uPx.x, 0.0)).r;
    float right = texture2D(uPressure, vUv + vec2(uPx.x, 0.0)).r;
    float bottom = texture2D(uPressure, vUv - vec2(0.0, uPx.y)).r;
    float top = texture2D(uPressure, vUv + vec2(0.0, uPx.y)).r;
    float divergence = texture2D(uDivergence, vUv).r;
    float pressure = (left + right + bottom + top - divergence) * 0.25;

    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`;

const gradientFragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;
  uniform vec2 uPx;

  void main() {
    float left = texture2D(uPressure, vUv - vec2(uPx.x, 0.0)).r;
    float right = texture2D(uPressure, vUv + vec2(uPx.x, 0.0)).r;
    float bottom = texture2D(uPressure, vUv - vec2(0.0, uPx.y)).r;
    float top = texture2D(uPressure, vUv + vec2(0.0, uPx.y)).r;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity -= vec2(right - left, top - bottom) * 0.5;

    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;

function createRenderTarget(size) {
  return new THREE.WebGLRenderTarget(size, size, {
    wrapS: THREE.ClampToEdgeWrapping,
    wrapT: THREE.ClampToEdgeWrapping,
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.HalfFloatType,
    depthBuffer: false,
    stencilBuffer: false,
  });
}

class DoubleBuffer {
  constructor(size) {
    this.readIndex = 0;
    this.writeIndex = 1;
    this.buffers = [createRenderTarget(size), createRenderTarget(size)];
  }

  get read() {
    return this.buffers[this.readIndex];
  }

  get write() {
    return this.buffers[this.writeIndex];
  }

  swap() {
    [this.readIndex, this.writeIndex] = [this.writeIndex, this.readIndex];
  }

  dispose() {
    this.buffers.forEach((buffer) => buffer.dispose());
  }
}

function clearTarget(renderer, target) {
  renderer.setRenderTarget(target);
  renderer.clear();
  renderer.setRenderTarget(null);
}

function safeColor(value) {
  try {
    return new THREE.Color(value);
  } catch {
    return new THREE.Color("#8fb7ff");
  }
}

export default function InteractiveWireSurface({
  accent = "#8fb7ff",
  className = "",
  variant = "hero",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    const settings = VARIANTS[variant] ?? VARIANTS.hero;
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = null;
    let isDisposed = false;
    let pointerIsInside = false;
    let hasUv = false;
    let lastUv = new THREE.Vector2(0.5, 0.5);

    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      container.dataset.surfaceFallback = "true";
      return undefined;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    if ("outputColorSpace" in renderer) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(72, 1, 0.001, 1000);
    camera.position.z = settings.cameraZ;

    const simScene = new THREE.Scene();
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const simQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), undefined);
    simScene.add(simQuad);

    const velocity = new DoubleBuffer(SIM_SIZE);
    const pressure = new DoubleBuffer(SIM_SIZE);
    const divergence = createRenderTarget(SIM_SIZE);

    [
      velocity.read,
      velocity.write,
      pressure.read,
      pressure.write,
      divergence,
    ].forEach((target) => clearTarget(renderer, target));

    const px = new THREE.Vector2(1 / SIM_SIZE, 1 / SIM_SIZE);
    const mouseUv = new THREE.Vector2(0.5, 0.5);
    const force = new THREE.Vector2(0, 0);

    const surfaceMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uAccent: { value: safeColor(accent) },
        uPressure: { value: pressure.read.texture },
        uTime: { value: 0 },
      },
      vertexShader: surfaceVertexShader,
      fragmentShader: surfaceFragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      wireframe: true,
    });

    const surfaceGeometry = new THREE.PlaneGeometry(
      settings.planeSize,
      settings.planeSize,
      SIM_SIZE,
      SIM_SIZE,
    );
    const surface = new THREE.Mesh(surfaceGeometry, surfaceMaterial);
    surface.rotation.set(
      THREE.MathUtils.degToRad(settings.rotation[0]),
      THREE.MathUtils.degToRad(settings.rotation[1]),
      THREE.MathUtils.degToRad(settings.rotation[2]),
    );
    surface.position.set(...settings.position);
    scene.add(surface);

    const advectMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uVelocity: { value: velocity.read.texture },
        uPx: { value: px },
        uMouse: { value: mouseUv },
        uForce: { value: force },
        uRadius: { value: settings.radius },
      },
      vertexShader: quadVertexShader,
      fragmentShader: advectFragmentShader,
    });

    const divergenceMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uVelocity: { value: velocity.write.texture },
        uPx: { value: px },
      },
      vertexShader: quadVertexShader,
      fragmentShader: divergenceFragmentShader,
    });

    const jacobiMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPressure: { value: pressure.read.texture },
        uDivergence: { value: divergence.texture },
        uPx: { value: px },
      },
      vertexShader: quadVertexShader,
      fragmentShader: jacobiFragmentShader,
    });

    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uPressure: { value: pressure.read.texture },
        uVelocity: { value: velocity.write.texture },
        uPx: { value: px },
      },
      vertexShader: quadVertexShader,
      fragmentShader: gradientFragmentShader,
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(20, 20);

    function renderPass(material, target) {
      simQuad.material = material;
      renderer.setRenderTarget(target);
      renderer.render(simScene, simCamera);
      renderer.setRenderTarget(null);
    }

    function resize() {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
    }

    function readPointer(event) {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      pointerIsInside = x >= 0 && x <= 1 && y >= 0 && y <= 1;

      if (!pointerIsInside) {
        hasUv = false;
        return;
      }

      pointer.set(x * 2 - 1, -(y * 2 - 1));
    }

    function updateMouseForce() {
      if (!pointerIsInside || reduceMotionQuery.matches) {
        force.multiplyScalar(0.78);
        return;
      }

      raycaster.setFromCamera(pointer, camera);
      const intersection = raycaster.intersectObject(surface, false)[0];

      if (!intersection?.uv) {
        hasUv = false;
        force.multiplyScalar(0.78);
        return;
      }

      mouseUv.copy(intersection.uv);

      if (!hasUv) {
        lastUv.copy(mouseUv);
        hasUv = true;
      }

      force.set(
        (mouseUv.x - lastUv.x) * settings.force,
        (mouseUv.y - lastUv.y) * settings.force,
      );
      lastUv.copy(mouseUv);
    }

    function step(time = 0) {
      updateMouseForce();

      advectMaterial.uniforms.uVelocity.value = velocity.read.texture;
      renderPass(advectMaterial, velocity.write);

      divergenceMaterial.uniforms.uVelocity.value = velocity.write.texture;
      renderPass(divergenceMaterial, divergence);

      for (let index = 0; index < JACOBI_ITERATIONS; index += 1) {
        jacobiMaterial.uniforms.uPressure.value = pressure.read.texture;
        renderPass(jacobiMaterial, pressure.write);
        pressure.swap();
      }

      gradientMaterial.uniforms.uPressure.value = pressure.read.texture;
      gradientMaterial.uniforms.uVelocity.value = velocity.write.texture;
      renderPass(gradientMaterial, velocity.read);

      surfaceMaterial.uniforms.uPressure.value = pressure.read.texture;
      surfaceMaterial.uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
    }

    function animate(time) {
      if (isDisposed) {
        return;
      }

      step(time);

      if (!reduceMotionQuery.matches) {
        frameId = requestAnimationFrame(animate);
      }
    }

    function restartAnimation() {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }

      if (reduceMotionQuery.matches) {
        step(performance.now());
        return;
      }

      frameId = requestAnimationFrame(animate);
    }

    resize();
    step(performance.now());
    restartAnimation();

    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(resize) : null;
    resizeObserver?.observe(container);

    window.addEventListener("resize", resize);
    document.addEventListener("pointermove", readPointer, { passive: true });
    if (reduceMotionQuery.addEventListener) {
      reduceMotionQuery.addEventListener("change", restartAnimation);
    } else {
      reduceMotionQuery.addListener(restartAnimation);
    }

    return () => {
      isDisposed = true;

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      resizeObserver?.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("pointermove", readPointer);
      if (reduceMotionQuery.removeEventListener) {
        reduceMotionQuery.removeEventListener("change", restartAnimation);
      } else {
        reduceMotionQuery.removeListener(restartAnimation);
      }

      simQuad.geometry.dispose();
      surfaceGeometry.dispose();
      surfaceMaterial.dispose();
      advectMaterial.dispose();
      divergenceMaterial.dispose();
      jacobiMaterial.dispose();
      gradientMaterial.dispose();
      velocity.dispose();
      pressure.dispose();
      divergence.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [accent, variant]);

  return (
    <div
      aria-hidden="true"
      className={["interactive-wire-surface", className].filter(Boolean).join(" ")}
      ref={containerRef}
      style={{ "--project-accent": accent }}
    />
  );
}

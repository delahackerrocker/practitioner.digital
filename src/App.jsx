import { startTransition, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { getProjectBySlug } from "./data/projects";
import { siteMeta } from "./data/siteContent";

function readLocation() {
  return {
    pathname: window.location.pathname,
    hash: window.location.hash,
  };
}

function normalizePathname(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed || "/";
}

function resolveProject(pathname) {
  const normalizedPath = normalizePathname(pathname);

  if (!normalizedPath.startsWith("/projects/")) {
    return null;
  }

  return getProjectBySlug(normalizedPath.replace("/projects/", ""));
}

export default function App() {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const syncLocation = () => {
      startTransition(() => {
        setLocation(readLocation());
      });
    };

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("app:navigate", syncLocation);

    return () => {
      window.removeEventListener("popstate", syncLocation);
      window.removeEventListener("app:navigate", syncLocation);
    };
  }, []);

  const navigate = (to, options = {}) => {
    const method = options.replace ? "replaceState" : "pushState";
    window.history[method]({}, "", to);
    window.dispatchEvent(new Event("app:navigate"));
  };

  const normalizedPath = normalizePathname(location.pathname);
  const project = resolveProject(location.pathname);
  const pageTitle = project
    ? `${project.title} | ${siteMeta.owner}`
    : siteMeta.title;

  useEffect(() => {
    document.title = pageTitle;

    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(location.hash);

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        window.scrollTo({ top: 0, behavior: "auto" });
      });

      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, location.pathname, pageTitle]);

  const isHome = normalizedPath === "/";
  const isProjectView = normalizedPath.startsWith("/projects/");

  return (
    <div className="app-shell">
      <div className="app-shell__backdrop" />
      <Navbar
        isProjectView={isProjectView}
        location={location}
        navigate={navigate}
      />
      <main className="app-main">
        {isHome ? (
          <Home navigate={navigate} />
        ) : (
          <ProjectDetail navigate={navigate} project={project} />
        )}
      </main>
    </div>
  );
}

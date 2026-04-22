const option = (label, value) => ({ label, value });

const colorField = (path, label, cssVar, help = "") => ({
  path,
  label,
  type: "color",
  cssVar,
  help,
});

const rangeField = (path, label, cssVar, unit, min, max, step, help = "") => ({
  path,
  label,
  type: "range",
  cssVar,
  unit,
  min,
  max,
  step,
  help,
});

const selectField = (path, label, cssVar, options, help = "") => ({
  path,
  label,
  type: "select",
  cssVar,
  options,
  help,
});

const toggleField = (path, label, help = "") => ({
  path,
  label,
  type: "toggle",
  help,
});

export const tuningProfileName = "Practitioner default";

const fontStackOptions = [
  option(
    "Aptos / Segoe",
    '"Aptos Display", "Segoe UI Variable Display", "Segoe UI", sans-serif'
  ),
  option("Segoe UI", '"Segoe UI", sans-serif'),
  option("System Sans", "system-ui, sans-serif"),
];

const motionEaseOptions = [
  option("Ease", "ease"),
  option("Soft", "cubic-bezier(0.4, 0, 0.2, 1)"),
  option("Snappy", "cubic-bezier(0.22, 1, 0.36, 1)"),
  option("Linear", "linear"),
];

export const tuningTabs = [
  {
    id: "brand",
    label: "Brand",
    description: "Global color, surface, and shadow tuning.",
    sections: [
      {
        title: "Background",
        controls: [
          colorField("brand.backgroundStart", "Background top", "--color-bg-start"),
          colorField("brand.background", "Background middle", "--color-bg"),
          colorField("brand.backgroundEnd", "Background bottom", "--color-bg-end"),
          colorField("brand.backgroundGlow", "Cool glow", "--color-bg-glow"),
          colorField("brand.backgroundWarmGlow", "Warm glow", "--color-bg-warm-glow"),
        ],
      },
      {
        title: "Surfaces",
        controls: [
          colorField("brand.surface", "Surface", "--color-surface"),
          colorField("brand.surfaceStrong", "Strong surface", "--color-surface-strong"),
          colorField("brand.panel", "Panel", "--color-panel"),
          colorField("brand.border", "Border", "--color-border"),
          colorField("brand.borderStrong", "Strong border", "--color-border-strong"),
        ],
      },
      {
        title: "Text and Accent",
        controls: [
          colorField("brand.text", "Text", "--color-text"),
          colorField("brand.textSoft", "Soft text", "--color-text-soft"),
          colorField("brand.textMuted", "Muted text", "--color-text-muted"),
          colorField("brand.accent", "Accent", "--color-accent"),
          colorField("brand.accentSoft", "Accent soft", "--color-accent-soft"),
        ],
      },
      {
        title: "Shadows",
        controls: [
          rangeField(
            "brand.shadowSoftAlpha",
            "Soft shadow alpha",
            "--shadow-soft-alpha",
            "",
            0,
            0.7,
            0.01
          ),
          rangeField(
            "brand.shadowCardAlpha",
            "Card shadow alpha",
            "--shadow-card-alpha",
            "",
            0,
            0.7,
            0.01
          ),
        ],
      },
    ],
  },
  {
    id: "typography",
    label: "Typography",
    description: "Font stacks and type scale controls.",
    sections: [
      {
        title: "Font Stacks",
        controls: [
          selectField(
            "typography.displayFont",
            "Display font",
            "--font-display",
            fontStackOptions
          ),
          selectField("typography.bodyFont", "Body font", "--font-body", fontStackOptions),
        ],
      },
      {
        title: "Scale",
        controls: [
          rangeField("typography.h1Min", "H1 min", "--h1-min", "rem", 1.6, 5.5, 0.1),
          rangeField("typography.h1Max", "H1 max", "--h1-max", "rem", 2.4, 8.0, 0.1),
          rangeField("typography.h2Min", "H2 min", "--h2-min", "rem", 1.2, 3.5, 0.05),
          rangeField("typography.h2Max", "H2 max", "--h2-max", "rem", 1.8, 5.0, 0.05),
          rangeField("typography.h3Min", "H3 min", "--h3-min", "rem", 0.8, 2.0, 0.05),
          rangeField("typography.h3Max", "H3 max", "--h3-max", "rem", 1.0, 2.4, 0.05),
          rangeField(
            "typography.introSize",
            "Intro size",
            "--intro-size",
            "rem",
            0.7,
            1.5,
            0.05
          ),
          rangeField("typography.bodyLineHeight", "Body line height", "--body-line-height", "", 1.4, 2.0, 0.02),
          rangeField(
            "typography.headingLineHeight",
            "Heading line height",
            "--heading-line-height",
            "",
            0.9,
            1.3,
            0.01
          ),
          rangeField(
            "typography.eyebrowSize",
            "Eyebrow size",
            "--eyebrow-size",
            "rem",
            0.55,
            0.95,
            0.01
          ),
          rangeField(
            "typography.eyebrowLetterSpacing",
            "Eyebrow tracking",
            "--eyebrow-letter-spacing",
            "em",
            0.08,
            0.3,
            0.01
          ),
          rangeField(
            "typography.letterSpacing",
            "Heading tracking",
            "--heading-letter-spacing",
            "em",
            -0.05,
            0.02,
            0.005
          ),
          rangeField(
            "typography.paragraphSpacing",
            "Paragraph spacing",
            "--paragraph-spacing",
            "rem",
            0.5,
            1.8,
            0.05
          ),
          rangeField(
            "typography.sectionTitleGap",
            "Section title gap",
            "--section-title-gap",
            "rem",
            0.2,
            1.5,
            0.05
          ),
        ],
      },
    ],
  },
  {
    id: "layout",
    label: "Layout",
    description: "Page shell widths, padding, and global rhythm.",
    sections: [
      {
        title: "Shell",
        controls: [
          rangeField("layout.shellWidth", "Shell width", "--shell-width", "px", 960, 1440, 10),
          rangeField("layout.shellGutter", "Shell gutter", "--shell-gutter", "rem", 0.5, 2.5, 0.05),
          rangeField(
            "layout.appMainBottom",
            "App bottom padding",
            "--app-main-padding-bottom",
            "rem",
            2,
            6,
            0.1
          ),
        ],
      },
      {
        title: "Sections",
        controls: [
          rangeField(
            "layout.sectionSpacing",
            "Section spacing",
            "--section-margin-top",
            "rem",
            1,
            4,
            0.05
          ),
          rangeField("layout.sectionPadding", "Section padding", "--section-padding", "rem", 2, 5, 0.05),
          rangeField("layout.sectionRadius", "Section radius", "--radius-xl", "px", 20, 48, 1),
          rangeField(
            "layout.sectionHeaderMaxWidth",
            "Section header width",
            "--section-header-max-width",
            "px",
            520,
            900,
            10
          ),
          rangeField(
            "layout.sectionIntroMaxWidth",
            "Section intro width",
            "--section-intro-max-width",
            "px",
            480,
            900,
            10
          ),
        ],
      },
      {
        title: "Grid Rhythm",
        controls: [
          rangeField("layout.gridGap", "Grid gap", "--grid-gap", "rem", 0.6, 2, 0.05),
          rangeField(
            "layout.contactGridGap",
            "Contact grid gap",
            "--contact-grid-gap",
            "rem",
            0.6,
            2,
            0.05
          ),
        ],
      },
    ],
  },
  {
    id: "header",
    label: "Header / Nav",
    description: "Sticky shell, nav spacing, and content gap.",
    sections: [
      {
        title: "Shell",
        controls: [
          toggleField("header.sticky", "Sticky header"),
          rangeField(
            "header.contentGap",
            "Gap Below Header",
            "--header-content-gap",
            "rem",
            4,
            9,
            0.1,
            "Spacing between the header bar and the first content block."
          ),
          rangeField("header.topSpacing", "Top spacing", "--nav-top-spacing", "rem", 0, 2, 0.05),
          rangeField("header.innerPaddingX", "Inner padding X", "--nav-inner-padding-x", "rem", 0.5, 1.5, 0.05),
          rangeField("header.innerPaddingY", "Inner padding Y", "--nav-inner-padding-y", "rem", 0.5, 1.5, 0.05),
          rangeField("header.radius", "Nav radius", "--nav-radius", "px", 20, 60, 1),
          rangeField(
            "header.backgroundAlpha",
            "Background alpha",
            "--nav-background-alpha",
            "",
            0.4,
            1,
            0.01
          ),
          rangeField("header.blur", "Blur", "--nav-blur", "px", 0, 40, 1),
          rangeField(
            "header.borderOpacity",
            "Border opacity",
            "--nav-border-opacity",
            "",
            0,
            0.4,
            0.01
          ),
        ],
      },
      {
        title: "Identity",
        controls: [
          rangeField(
            "header.brandTitleScale",
            "Brand title scale",
            "--nav-brand-title-scale",
            "",
            0.85,
            1.2,
            0.01
          ),
          rangeField(
            "header.brandMetaScale",
            "Brand meta scale",
            "--nav-brand-meta-scale",
            "",
            0.7,
            1.05,
            0.01
          ),
          rangeField("header.navGap", "Nav gap", "--nav-link-gap", "rem", 0.2, 1.5, 0.05),
          rangeField(
            "header.navPaddingX",
            "Nav link padding X",
            "--nav-link-padding-x",
            "rem",
            0.6,
            1.4,
            0.05
          ),
          rangeField(
            "header.navPaddingY",
            "Nav link padding Y",
            "--nav-link-padding-y",
            "rem",
            0.45,
            1.1,
            0.05
          ),
          rangeField(
            "header.togglePaddingX",
            "Toggle padding X",
            "--nav-toggle-padding-x",
            "rem",
            0.6,
            1.4,
            0.05
          ),
          rangeField(
            "header.togglePaddingY",
            "Toggle padding Y",
            "--nav-toggle-padding-y",
            "rem",
            0.45,
            1.1,
            0.05
          ),
        ],
      },
    ],
  },
  {
    id: "hero",
    label: "Home / Hero",
    description: "Intro width, hero padding, and quick-link spacing.",
    sections: [
      {
        title: "Content",
        controls: [
          rangeField("hero.contentPadding", "Content padding", "--hero-content-padding", "rem", 2, 5, 0.05),
          rangeField("hero.contentRadius", "Content radius", "--hero-content-radius", "px", 24, 48, 1),
          rangeField(
            "hero.contentMaxWidth",
            "Content width",
            "--hero-content-max-width",
            "px",
            520,
            900,
            10
          ),
          rangeField("hero.asideMinWidth", "Aside min width", "--hero-aside-min-width", "px", 220, 420, 4),
          rangeField(
            "hero.titleMaxWidth",
            "Headline width",
            "--hero-title-max-width",
            "ch",
            8,
            32,
            0.5
          ),
          rangeField(
            "hero.introMaxWidth",
            "Intro width",
            "--hero-intro-max-width",
            "ch",
            40,
            80,
            1
          ),
          rangeField(
            "hero.positioningMaxWidth",
            "Positioning width",
            "--hero-positioning-max-width",
            "ch",
            40,
            80,
            1
          ),
        ],
      },
      {
        title: "Rhythm",
        controls: [
          rangeField("hero.actionsGap", "CTA gap", "--hero-actions-gap", "rem", 0.5, 1.5, 0.05),
          rangeField("hero.quickLinkGap", "Quick-link gap", "--hero-quick-link-gap", "rem", 0.5, 1.5, 0.05),
          rangeField("hero.asideGap", "Aside gap", "--hero-aside-gap", "rem", 1, 2.5, 0.05),
          rangeField("hero.panelPadding", "Panel padding", "--hero-panel-padding", "rem", 1, 2.5, 0.05),
          rangeField(
            "hero.spotlightPadding",
            "Spotlight padding",
            "--hero-spotlight-padding",
            "rem",
            1,
            2.5,
            0.05
          ),
          rangeField("hero.panelGap", "Panel gap", "--hero-panel-gap", "rem", 0.5, 1.5, 0.05),
        ],
      },
    ],
  },
  {
    id: "projects",
    label: "Project Grid",
    description: "Card sizing, hover lift, and visual balance.",
    sections: [
      {
        title: "Card Shell",
        controls: [
          rangeField("projectGrid.gap", "Grid gap", "--project-grid-gap", "rem", 0.6, 2, 0.05),
          rangeField("projectGrid.cardRadius", "Card radius", "--project-card-radius", "px", 18, 36, 1),
          rangeField("projectGrid.cardPadding", "Card padding", "--project-card-padding", "rem", 1, 2.5, 0.05),
          rangeField(
            "projectGrid.visualMinHeight",
            "Visual height",
            "--project-card-visual-min-height",
            "px",
            200,
            360,
            4
          ),
          rangeField("projectGrid.bodyGap", "Body gap", "--project-card-body-gap", "rem", 0.6, 1.8, 0.05),
        ],
      },
      {
        title: "Copy and Hover",
        controls: [
          rangeField("projectGrid.copyTitleGap", "Title gap", "--project-card-copy-title-gap", "rem", 0.2, 1, 0.05),
          rangeField(
            "projectGrid.copyParagraphGap",
            "Paragraph gap",
            "--project-card-copy-paragraph-gap",
            "rem",
            0.5,
            1.5,
            0.05
          ),
          rangeField("projectGrid.metaGap", "Meta gap", "--project-card-meta-gap", "rem", 0.4, 1.2, 0.05),
          rangeField("projectGrid.tagGap", "Tag gap", "--project-card-tag-gap", "rem", 0.4, 1.2, 0.05),
          rangeField(
            "projectGrid.hoverLift",
            "Hover lift",
            "--project-card-hover-lift",
            "px",
            0,
            8,
            0.25
          ),
          rangeField(
            "projectGrid.hoverScale",
            "Hover scale",
            "--project-card-hover-scale",
            "",
            1,
            1.05,
            0.001
          ),
          rangeField(
            "projectGrid.shadowAlpha",
            "Hover shadow",
            "--project-card-shadow-alpha",
            "",
            0,
            0.6,
            0.01
          ),
        ],
      },
    ],
  },
  {
    id: "case-study",
    label: "Case Study",
    description: "Hero width, detail spacing, and callout treatment.",
    sections: [
      {
        title: "Hero",
        controls: [
          rangeField(
            "caseStudy.heroPadding",
            "Hero padding",
            "--case-study-hero-padding",
            "rem",
            2,
            5,
            0.05
          ),
          rangeField("caseStudy.gridGap", "Hero gap", "--case-study-hero-gap", "rem", 1, 2.5, 0.05),
          rangeField(
            "caseStudy.contentMaxWidth",
            "Content width",
            "--case-study-content-max-width",
            "px",
            520,
            900,
            10
          ),
          rangeField("caseStudy.metaMinWidth", "Meta min width", "--case-study-meta-min-width", "px", 220, 360, 4),
          rangeField("caseStudy.summaryMaxWidth", "Summary width", "--case-study-summary-max-width", "ch", 42, 72, 1),
          rangeField("caseStudy.metaGap", "Meta gap", "--case-study-meta-gap", "rem", 0.6, 1.5, 0.05),
        ],
      },
      {
        title: "Detail and Callout",
        controls: [
          rangeField(
            "caseStudy.detailCardPadding",
            "Detail padding",
            "--detail-card-padding",
            "rem",
            1,
            2,
            0.05
          ),
          rangeField(
            "caseStudy.detailGridGap",
            "Detail grid gap",
            "--detail-grid-gap",
            "rem",
            0.6,
            2,
            0.05
          ),
          rangeField(
            "caseStudy.relatedGridGap",
            "Related grid gap",
            "--related-grid-gap",
            "rem",
            0.6,
            2,
            0.05
          ),
          rangeField("caseStudy.calloutPadding", "Callout padding", "--flagship-callout-padding", "rem", 1.2, 3, 0.05),
          rangeField("caseStudy.calloutRadius", "Callout radius", "--flagship-callout-radius", "px", 20, 44, 1),
        ],
      },
    ],
  },
  {
    id: "media",
    label: "Media",
    description: "Gallery, slideshow, and frame treatment.",
    sections: [
      {
        title: "Gallery",
        controls: [
          rangeField("media.galleryGap", "Gallery gap", "--media-gallery-gap", "rem", 0.5, 1.5, 0.05),
          rangeField(
            "media.galleryStageMinHeight",
            "Gallery height",
            "--media-gallery-stage-min-height",
            "px",
            320,
            620,
            4
          ),
          rangeField(
            "media.summaryMinWidth",
            "Summary min width",
            "--media-summary-min-width",
            "px",
            220,
            420,
            4
          ),
          rangeField(
            "media.summaryPadding",
            "Summary padding",
            "--media-gallery-summary-padding",
            "rem",
            1,
            2.5,
            0.05
          ),
          rangeField(
            "media.controlsGap",
            "Controls gap",
            "--media-gallery-controls-gap",
            "rem",
            0.5,
            1.5,
            0.05
          ),
          rangeField(
            "media.captionGap",
            "Caption gap",
            "--media-caption-gap",
            "rem",
            0.3,
            1.2,
            0.05
          ),
          rangeField(
            "media.dividerSpacing",
            "Divider spacing",
            "--media-divider-spacing",
            "rem",
            0.5,
            2,
            0.05
          ),
          rangeField("media.framePadding", "Frame padding", "--media-frame-padding", "rem", 1, 3, 0.05),
          rangeField("media.frameRadius", "Frame radius", "--media-frame-radius", "px", 16, 36, 1),
          rangeField("media.frameMinHeight", "Frame height", "--media-frame-min-height", "px", 320, 560, 4),
        ],
      },
      {
        title: "Slideshow",
        controls: [
          rangeField(
            "media.featureStageMinHeight",
            "Slideshow height",
            "--feature-stage-min-height",
            "px",
            420,
            760,
            4
          ),
          rangeField(
            "media.featureStageRadius",
            "Slideshow radius",
            "--feature-stage-radius",
            "px",
            20,
            44,
            1
          ),
          rangeField(
            "media.featureStagePadding",
            "Slideshow padding",
            "--feature-stage-padding",
            "rem",
            0.75,
            1.75,
            0.05
          ),
          rangeField("media.railGap", "Rail gap", "--feature-rail-gap", "rem", 0.5, 1.5, 0.05),
          rangeField(
            "media.railPadding",
            "Rail padding",
            "--feature-rail-padding",
            "rem",
            0.6,
            1.4,
            0.05
          ),
          rangeField(
            "media.railItemMinWidth",
            "Rail item width",
            "--feature-rail-item-min-width",
            "px",
            64,
            140,
            2
          ),
          rangeField(
            "media.railItemPadding",
            "Rail item padding",
            "--feature-rail-item-padding",
            "rem",
            0.6,
            1.4,
            0.05
          ),
        ],
      },
      {
        title: "Frame Treatment",
        controls: [
          rangeField(
            "media.mediaShadowAlpha",
            "Media shadow",
            "--media-shadow-alpha",
            "",
            0,
            0.45,
            0.01
          ),
          rangeField(
            "media.containRadius",
            "Contain radius",
            "--media-contain-radius",
            "px",
            16,
            36,
            1
          ),
        ],
      },
    ],
  },
  {
    id: "motion",
    label: "Motion",
    description: "Transitions, hover feel, and reduced motion override.",
    sections: [
      {
        title: "Core",
        controls: [
          rangeField(
            "motion.transitionDuration",
            "Duration",
            "--motion-duration",
            "ms",
            80,
            360,
            5
          ),
          selectField("motion.ease", "Easing", "--motion-ease", motionEaseOptions),
          rangeField(
            "motion.interactiveLift",
            "Interactive lift",
            "--motion-interactive-lift",
            "px",
            0,
            6,
            0.25
          ),
          rangeField(
            "motion.interactiveScale",
            "Interactive scale",
            "--motion-interactive-scale",
            "",
            1,
            1.04,
            0.001
          ),
          toggleField("motion.reducedMotion", "Reduced motion override"),
        ],
      },
    ],
  },
  {
    id: "debug",
    label: "Debug / Guide",
    description: "Layout overlays and visual guide tuning.",
    sections: [
      {
        title: "Bounds",
        controls: [
          toggleField("debug.showBounds", "Show component bounds"),
          toggleField("debug.showMaxWidthGuide", "Show max-width guides"),
        ],
      },
      {
        title: "Guides",
        controls: [
          rangeField(
            "debug.gridOpacity",
            "Grid opacity",
            "--debug-grid-opacity",
            "",
            0,
            0.18,
            0.005
          ),
          rangeField("debug.gridSize", "Grid size", "--debug-grid-size", "px", 32, 120, 2),
          rangeField(
            "debug.guideOpacity",
            "Guide opacity",
            "--debug-guide-opacity",
            "",
            0,
            0.5,
            0.01
          ),
          rangeField(
            "debug.outlineOpacity",
            "Outline opacity",
            "--debug-outline-opacity",
            "",
            0,
            0.5,
            0.01
          ),
          rangeField("debug.outlineWidth", "Outline width", "--debug-outline-width", "px", 1, 4, 0.5),
        ],
      },
    ],
  },
];

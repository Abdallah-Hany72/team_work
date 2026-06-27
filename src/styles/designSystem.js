export const colorPalette = {
  primary: "#ac3509",
  "on-primary": "#ffffff",
  "primary-container": "#ff7043",
  "on-primary-container": "#641800",
  "primary-fixed": "#ffdbd0",
  "primary-fixed-dim": "#ffb59f",
  "on-primary-fixed": "#3a0a00",
  "on-primary-fixed-variant": "#852300",
  "inverse-primary": "#ffb59f",

  secondary: "#006a63",
  "on-secondary": "#ffffff",
  "secondary-container": "#8bf1e6",
  "on-secondary-container": "#006f67",
  "secondary-fixed": "#8ef4e9",
  "secondary-fixed-dim": "#71d7cd",
  "on-secondary-fixed": "#00201d",
  "on-secondary-fixed-variant": "#00504a",

  tertiary: "#835500",
  "on-tertiary": "#ffffff",
  "tertiary-container": "#d08f27",
  "on-tertiary-container": "#4a2e00",
  "tertiary-fixed": "#ffddb4",
  "tertiary-fixed-dim": "#ffb954",
  "on-tertiary-fixed": "#291800",
  "on-tertiary-fixed-variant": "#633f00",

  error: "#ba1a1a",
  "on-error": "#ffffff",
  "error-container": "#ffdad6",
  "on-error-container": "#93000a",

  background: "#f4faff",
  "on-background": "#111d23",
  surface: "#f4faff",
  "on-surface": "#111d23",
  "surface-variant": "#d7e4ec",
  "on-surface-variant": "#59413a",
  "surface-bright": "#f4faff",
  "surface-dim": "#cfdce4",
  "surface-container-lowest": "#ffffff",
  "surface-container-low": "#e9f6fd",
  "surface-container": "#e3f0f8",
  "surface-container-high": "#ddeaf2",
  "surface-container-highest": "#d7e4ec",
  "surface-tint": "#ac3509",
  "inverse-surface": "#263238",
  "inverse-on-surface": "#e6f3fb",
  outline: "#8d7169",
  "outline-variant": "#e0bfb6",
};

export const fontFamily = {
  "display-lg": ["Plus Jakarta Sans", "sans-serif"],
  "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
  "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
  "headline-md": ["Plus Jakarta Sans", "sans-serif"],
  "vibe-tag": ["Plus Jakarta Sans", "sans-serif"],
  "body-lg": ["DM Sans", "sans-serif"],
  "body-md": ["DM Sans", "sans-serif"],
  "label-md": ["DM Sans", "sans-serif"],
};

export const typographyScale = {
  "display-lg": {
    fontSize: "48px",
    lineHeight: "56px",
    letterSpacing: "-0.02em",
    fontWeight: "800",
  },
  "headline-lg": {
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "-0.01em",
    fontWeight: "700",
  },
  "headline-lg-mobile": {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: "700",
  },
  "headline-md": {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "600",
  },
  "body-lg": {
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: "400",
  },
  "body-md": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
  },
  "label-md": {
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    fontWeight: "600",
  },
  "vibe-tag": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "700",
  },
};

export const spacingSystem = {
  unit: "8px",
  "stack-sm": "8px",
  "stack-md": "16px",
  "stack-lg": "32px",
  gutter: "24px",
  "margin-mobile": "20px",
  "margin-desktop": "64px",
  "container-max": "1280px",
};

export const borderRadius = {
  DEFAULT: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

export const shadows = {
  sunlight: "0 30px 60px -12px rgba(17, 29, 35, 0.08)",
  "sunlight-sm": "0 4px 30px 0 rgba(0,0,0,0.05)",
};

export const tailwindTheme = {
  extend: {
    colors: colorPalette,
    fontFamily,
    fontSize: typographyScale,
    spacing: spacingSystem,
    borderRadius,
    maxWidth: {
      "container-max": spacingSystem["container-max"],
    },
    boxShadow: shadows,
  },
};

export default {
  colorPalette,
  fontFamily,
  typographyScale,
  spacingSystem,
  borderRadius,
  shadows,
  tailwindTheme,
};

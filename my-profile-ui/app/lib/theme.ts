import type { ThemeConfig } from "antd";

export const NAVY = "#1a2744";
export const NAVY_LIGHT = "#2e4a8a";
export const ACCENT = "#3b82f6";

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: ACCENT,
    colorLink: ACCENT,
    fontFamily: "'Inter', 'Geist', sans-serif",
    borderRadius: 8,
  },
};

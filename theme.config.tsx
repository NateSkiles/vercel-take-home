import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Vercel Take Home</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  docsRepositoryBase: "https://github.com/NateSkiles/vercel-take-home",
  footer: {
    text: "Built by Nate Skiles",
  },
  editLink: {
    component: null,
  },
  faviconGlyph: "🔺",
};

export default config;

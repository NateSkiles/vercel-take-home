import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
      <span style={{ marginLeft: "10px" }}>Vercel Take Home</span>
    </>
  ),
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

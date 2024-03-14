import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";
import { FaLinkedin } from "react-icons/fa6";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
      <span style={{ marginLeft: "10px" }}>Take Home Exercise</span>
    </>
  ),
  project: {
    link: "https://github.com/NateSkiles/vercel-take-home",
  },
  chat: {
    link: "https://www.linkedin.com/in/nathan-skiles/",
    icon: <FaLinkedin size={24} />,
  },
  docsRepositoryBase: "https://github.com/NateSkiles/vercel-take-home",
  footer: {
    text: "Built by Nate Skiles",
  },
  editLink: {
    component: null,
  },
  faviconGlyph: "▲",
};

export default config;

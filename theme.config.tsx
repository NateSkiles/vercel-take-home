import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";
import { FaLinkedin } from "react-icons/fa6";
import { useRouter } from "next/router";
import Footer from "./components/Footer";

const useNextSeoProps = () => {
  const { asPath } = useRouter();
  if (asPath !== "/") {
    return {
      titleTemplate: "%s | Nate Skiles",
    };
  }
};

const config: DocsThemeConfig = {
  logo: (
    <>
      <Logo />
      <span style={{ marginLeft: "10px" }}>Take Home Exercise</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Vercel Take Home Exercise" />
      <meta name="og:title" content="Vercel Take Home Exercise" />
      <link rel="icon" href="/favicon.ico" />
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
    component: Footer,
  },
  editLink: {
    component: null,
  },
  useNextSeoProps,
};

export default config;

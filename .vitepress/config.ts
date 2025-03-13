// VitePress documentation configuration file.
//
// This configuration uses the default VitePress theme, whose details can be
// found at https://vitepress.dev/reference/default-theme-config. For more
// information on VitePress configuration, visit
// https://vitepress.dev/reference/site-config.

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";
import { VitePWA } from "vite-plugin-pwa";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
  base: "/guidapi/",
  description: "Personal collection of notes, tutorials, and workbooks.",
  // Head contents follow the progressive web apprequirements specified at
  // https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html.
  head: [
    [
      "link",
      { href: "/guidapi/apple-touch-icon.png", rel: "apple-touch-icon" },
    ],
    ["link", { href: "/guidapi/favicon.ico", rel: "icon", sizes: "48x48" }],
    [
      "link",
      {
        href: "/guidapi/favicon.svg",
        rel: "icon",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    ["link", { href: "/guidapi/site.webmanifest", rel: "manifest" }],
  ],
  lastUpdated: true,
  markdown: {
    math: true,
  },
  outDir: "public",
  srcDir: "docs",
  themeConfig: {
    aside: false,
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-Present Macklan Weinstein",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Audio", link: "/audio/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: generateSidebar([
      {
        documentRootPath: "docs",
        resolvePath: "/audio/",
        scanStartPath: "audio",
        useTitleFromFileHeading: true,
      },
    ]),
    socialLinks: [
      { icon: "github", link: "https://github.com/scruffaluff/guidapi" },
    ],
  },
  title: "Guidapi",
  vite: {
    publicDir: "../assets",
    plugins: [
      VitePWA({
        manifest: false,
        registerType: "autoUpdate",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../src", import.meta.url)),
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ["mpy-script", "py-script"].includes(tag),
      },
    },
  },
});

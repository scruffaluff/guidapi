import type { Theme } from "vitepress";
import "@fontsource/fira-code/300.css";
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/500.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/fira-code/700.css";
import "@fontsource/fira-sans/100.css";
import "@fontsource/fira-sans/200.css";
import "@fontsource/fira-sans/300.css";
import "@fontsource/fira-sans/400.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/fira-sans/600.css";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-sans/800.css";
import "@fontsource/fira-sans/900.css";
import "@fontsource/fira-sans/100-italic.css";
import "@fontsource/fira-sans/200-italic.css";
import "@fontsource/fira-sans/300-italic.css";
import "@fontsource/fira-sans/400-italic.css";
import "@fontsource/fira-sans/500-italic.css";
import "@fontsource/fira-sans/600-italic.css";
import "@fontsource/fira-sans/700-italic.css";
import "@fontsource/fira-sans/800-italic.css";
import "@fontsource/fira-sans/900-italic.css";
import DefaultTheme from "vitepress/theme-without-fonts";
import "@antonz/codapi/dist/snippet.css";
import "./index.css";

export default {
  enhanceApp() {
    if (!import.meta.env.SSR) {
      import("@antonz/codapi/dist/snippet.js");
    }
  },
  extends: DefaultTheme,
} satisfies Theme;

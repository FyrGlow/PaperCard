import { defineClientConfig } from "vuepress/client";
import CodeTabs from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import CodeDemo from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.27_markdown-it@14.0.0_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});

import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.18_vuepress@2.0.0-rc.8/node_modules/@vuepress/helper/lib/client/index.js";
import { h } from "vue";

import FontIcon from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import BiliBili from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import CodePen from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/CodePen.js";
import PDF from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import Replit from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/Replit.js";
import Share from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import SiteInfo from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import VPBanner from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";
import VPCard from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import XiGua from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/XiGua.js";
import Notice from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/components/Notice.js";

import "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.27_vuepress@2.0.0-rc.8/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("CodePen")) app.component("CodePen", CodePen);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("Replit")) app.component("Replit", Replit);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("XiGua")) app.component("XiGua", XiGua);
    
  },
  setup: () => {

  },
  rootComponents: [
    () => h(Notice, { config: [{"noticeKey":"4","path":"/","title":"更新日志：","showOnce":false,"content":"1.增加了萌萌哒看板娘ԅ(¯﹃¯ԅ)！<br>2.增加了更多指令和补充！<br>3.优化了界面颜色。<br>4.更多服务器信息请移步BiliBili专栏...","actions":[{"text":"查看专栏","link":"https://www.bilibili.com/read/cv32924203/","type":"primary"}]}] }),
  ],
});

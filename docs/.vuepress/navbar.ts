import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/docs/",
  "/issue/",
  {
    text: "教程文档",
    icon: "icon-crafting",
    prefix: "/tutorial/",
    children: [
      {
        text: "客户端教程",
        icon: "icon-client1-1",
        prefix: "client/",
        children: ["install", { text: "...", icon: "", link: "" }],
      },
      {
        text: "服务器教程",
        icon: "icon-world-1",
        prefix: "server/",
        children: ["join", { text: "服务器指令", icon: "icon-terminal", link: "command.md" }, { text: "称号设计指南", icon: "icon-trophy", link: "title.md" }, { text: "中文名申请流程", icon: "icon-profile", link: "name.md" }, { text: "漂流瓶插件介绍", icon: "icon-telegram", link: "driftbottle.md" }, { text: "支持与赞助", icon: "icon-heart", link: "support.md" }, { text: "...", icon: "", link: "" }],
      },
    ],
  },
  {
    text: "纸片皮肤站",
    icon: "icon-head",
    link: "https://skin.paper-card.cn/",
  },
]);

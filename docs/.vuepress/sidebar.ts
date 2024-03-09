import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "游玩须知",
      icon: "icon-apex",
      prefix: "docs/",
      link: "docs/",
      children: "structure",
    },
    {
      text: "疑难杂症",
      icon: "icon-creeper",
      prefix: "issue/",
      children: "structure",
    },
    {
      text: "教程文档",
      icon: "icon-crafting",
      prefix: "tutorial/",
      children: "structure",
    },
    {
      text: "纸片皮肤站",
      icon: "icon-head",
      link: "https://skin.paper-card.cn/",
    },
  ],
});

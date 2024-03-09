import { defineClientConfig } from "vuepress/client";


import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.27_@vuepress+plugin-docsearch@2.0.0-rc.18_@waline+client@3.1.3_m_6m72hmhkqr4vgvtpfmmpw3f4o4/node_modules/vuepress-theme-hope/lib/client/export.js";

import { defineCatalogInfoGetter } from "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.18_vuepress@2.0.0-rc.8/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "D:/projects/vuepress-theme-hope/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.27_@vuepress+plugin-docsearch@2.0.0-rc.18_@waline+client@3.1.3_m_6m72hmhkqr4vgvtpfmmpw3f4o4/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
});
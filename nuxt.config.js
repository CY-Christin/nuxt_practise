export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || "标题",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "自定义的描述信息" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  router: {
    middleware: "auth",
    extendRoutes(routes, resolve) {
      console.log(routes);
      routes.push({
        name: "home",
        path: "/index",
        component: resolve(__dirname, "pages/index.vue")
      });
    }
  },
  // loading: {
  //   color: "#399",
  //   height: "3px"
  // },
  loading: "~/components/loading.vue",
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["assets/css/transition.css", "element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/router",
    {
      src: "~/plugins/axios",
      ssr: true
    },
    {
      src: "~/plugins/element-ui",
      ssr: true //不支持ssr的插件只会在客户端运行不要给true
    },
    "~/plugins/mixin"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxt/typescript-build"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy", "cookie-universal-nuxt"],
  axios: {
    proxy: true
  },
  proxy: {
    "/api": {
      target: "https://api.zhuishushenqi.com",
      pathRewrite: {
        "^/api": "/"
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/]
  }
};

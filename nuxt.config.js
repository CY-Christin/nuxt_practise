export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "vuex-test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
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
  css: ["assets/css/transition.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/router",
    {
      src: "~/plugins/axios",
      ssr: true
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

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
  build: {}
};

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    //title: process.env.npm_package_name || '',
    title: "博客社区",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        //content: process.env.npm_package_description || ""
        content: "开发论坛"
      }
    ],
    link: [{rel: "icon", type: "image/x-icon", href: "/record.ico"}]
  },
  /*
   ** Global CSS
   */
  css: [
    //全局css样式
    //"element-ui/lib/theme-chalk/index.css",
    "@/assets/theme/index.scss",
    //自适应隐藏样式
    "element-ui/lib/theme-chalk/display.css",
    //自定义的全局样式
    "@/assets/css/global.css"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/element-ui", '@/plugins/resetFontSize.js', '@/plugins/interceptor'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    //4. 将位于node_modules的模块导出
    transpile: [/^element-ui/]
  },
  env: {
    authURL: process.env.NODE_ENV === 'dev' ? '//localhost:7000' : '线上地址//xxx.com'
  }
};

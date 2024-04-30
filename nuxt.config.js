export default {
  // universal, spa, server 세가지 존재
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '상품 상세 페이지',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      // 페이지 별로 open graph 설정하기
      {
        hid: 'og:title',
        property: 'og:title',
        content: '상품 상세 페이지'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '상품의 상세 정보를 확인해보세요'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://placeimg.com/640/480/fashion'
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/api"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // nuxtjs용 axios 모듈 추가
    "@nuxtjs/axios",
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // babel에서 webpack commonJS로 읽고 require()를 dynamic import로 수정하라고 할 때 해결 방법
    transpile: [({ isLegacy }) => isLegacy && 'axios'],
  },
  // 기본 값이 server, Deployment target : Server로 프로젝트 생성시에는 보통은 명시되어 있지 않다.
  target: 'server', // static(SSG)
  // router: {
  //   // 모든 라우팅에 대해서 stats 미들웨어가 적용
  //   middleware: "stats"
  // }

  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL,
    proxy: true,
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.API_URL,
  //   },
  // },
  //
  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.API_URL,
  //   },
  // },

  // axios.proxy: true 설정 필요
  proxy: {
    "/api/": {
      target: process.env.API_URL || 'http://localhost:3000',
    },
  }
}

// // nuxt.config.js 명시한
// // publicRuntimeConfig & privateRuntimeConfig 보다 우선권
// // 클라이언트 사이드와 서버 사이드 기본 포트 설정
// export default function({ $axios, redirect }, inject) {
//   if (process.server) {
//     $axios.setBaseURL("http://localhost:3000"); // 클라이언트 사이드
//   }
//   if (process.client) {
//     $axios.setBaseURL("http://localhost:4000"); // 서버 사이드
//   }
//
//   // 인터셉터
//   $axios.onRequest((config) => {
//     console.log("Making request to " + config.url); // 요청 때마다 url 출력
//   });
//
//   $axios.onError((error) => {
//     const code = parseInt(error.response && error.response.status);
//     if (code === 400) {
//       redirect("/400"); // 400 에러 발생시 /400으로 리다이렉트
//     }
//   });
//
//   // 커스텀 axios 인스턴스
//   const api = $axios.create({
//     headers: {
//       common: {
//         // application/json , text/plain
//         Accept: "text/plain, */*",
//       },
//     },
//   });
//
//   // 인스턴스의 기본 URL 변경
//   api.setBaseURL("https://my_api.com");
//
//   // context에 주입, $api 형태로 호출 가능
//   inject("api", api);
//
//   // 컴포넌트에서의 사용
//   // <script>
//   //   export default {
//   //   async asyncData({ $api }){
//   //   const { data } = await $api.get(...);
//   //   ...
//   // },
//   //   async fetch(){
//   //   const { data } = await this.$api.get(...);
//   //   ...
//   // },
//   // }
//   // </script>
// }
//

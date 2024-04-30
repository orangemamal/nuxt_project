require('dotenv').config()

// .env 환경 설정 안먹힘
export default function({ $axios, redirect }, inject) {
  // baseURL
  if (process.server) {
    $axios.setBaseURL('https://jsonplaceholder.typicode.com');
  }
  if (process.client) {
    $axios.setBaseURL('https://jsonplaceholder.typicode.com');
  }

  // API URL check
  $axios.onRequest((config) => {
    console.log("Making request to " + config.url); // 요청 때마다 url 출력
  });

  // 에러 처리
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400"); // 400 에러 발생시 /400으로 리다이렉트
    }
  });


  // context & component에서 사용할 수 있도록 axios instance inject 기능
  const api = $axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*",
      },
    },
  });
  // 인스턴스의 기본 URL 변경
  api.setBaseURL("https://jsonplaceholder.typicode.com");
  // context에 주입, $api 형태로 호출 가능
  inject("api", api);
}

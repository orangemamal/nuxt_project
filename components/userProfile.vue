<template>
  <div>
    <article>
      <p v-if="$fetchState.pending">사용자 API 호출 중</p>
      <p v-else-if="$fetchState.error">에러가 발생했습니다</p>
      <div v-else>{{ user }}</div>
    </article>
    <button @click="fetchUser">다시 호출하기</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // 아래 속성을 'false'로 바꾸면 서버에서 화면을 구성할 때 `fetch` 속성의 로직이 실행되지 않습니다.
  data() {
    return {
      user: {},
    }
  },
  async fetch() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    this.user = res.data;
  },
  methods: {
    fetchUser() {
      // fetch 속성의 로직을 실행합니다.
      this.$fetch();
    },
  },
  fetchOnServer: false
}
</script>

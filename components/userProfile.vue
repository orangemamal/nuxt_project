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
export default {
  data() {
    return {
      user: {},
    }
  },
  async fetch() {
    const token = 'YOUR_ACCESS_TOKEN';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await this.$axios.get('https://jsonplaceholder.typicode.com/users/1', config);
    this.user = res.data;
    console.log(this.user);
  },
  methods: {
    fetchUser() {
      this.fetch();
    }
  },
  fetchOnServer: false
}
</script>

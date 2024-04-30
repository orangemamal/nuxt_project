<template>
  <div>
    <article>
      <div>{{ user }}</div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [],
      error: null,
    }
  },
  async mounted() {
    try {
      // 인스턴스 주입
      const response = await this.$api.get(`users/1`);
      this.user = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}
</script>

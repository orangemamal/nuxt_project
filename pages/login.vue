<template>
  <div>
    <p>{{ $store.state.user }}</p>
    <button @click="displayUser"></button>
  </div>
</template>

<script>
export default {
  methods: {
    displayUser() {
      const user = { name: '넉스트' };
      this.$store.commit('setUser', user);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

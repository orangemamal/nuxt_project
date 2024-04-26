<template>
  <div>

  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // 만약 유저가 인증 받지 못한 경우 로그인 페이지로 이동합니다.
    if (!store.state.authenticated) {
      return redirect("/login");
    }
  },
};
</script>

<style lang="scss" scoped>

</style>

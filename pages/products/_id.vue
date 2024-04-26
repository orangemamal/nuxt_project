<template>
  <div>

  </div>
</template>

<script>
export default {
  // 만약 컴포넌트에 정의되어 있는 뷰 인스턴스 데이터나
  // 컴퓨티드 속성을 메타 태그에 값으로 연결하고 싶다면
  // 아래와 같이 함수 형태로 작성합니다.
  data() {
    return {
      productName: '바삭한 과자'
    }
  },
  head() {
    return {
      title: `상품 상세 페이지 - ${this.productName}`
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

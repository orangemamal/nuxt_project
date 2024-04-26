<script>
// 컴포넌트 개별 head 태그 설정하기
export default {
  data() {
    return {
      str: 'hi'
    }
  },
  head: {
    title: '페이지 타이틀',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '페이지 설명 내용',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },
}
</script>

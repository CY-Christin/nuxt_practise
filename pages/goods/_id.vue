<template>
  <div class="detail">
    <h3>详情页</h3>
    <h4>{{ word }}</h4>
  </div>
</template>
<script>
export default {
  name: "goodsDetail",
  validate({ params, query }) {
    return typeof params.id === "number";
  },
  transition: "test",
  data() {
    return {
      word: this.$route.query.collectionName
    };
  }
};
</script>
<style scoped>
/* .test-enter-active,
.test-leave-active {
  transition: 0.5s ease all;
}
.test-enter,
.test-leave-active {
  margin-left: -1000px;
} */
</style>

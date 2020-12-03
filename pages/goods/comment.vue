<template>
  <div class="comment">
    <h3>评论</h3>
    <nuxt-link
      :to="{
        name: 'goods-comment-uid',
        params: { uid: 1 },
        query: { a: 1, b: 2 }
      }"
      >评论1</nuxt-link
    >
    <nuxt-link
      :to="{
        name: 'goods-comment-uid',
        params: { uid: 2 },
        query: { a: 2, b: 3 }
      }"
      >评论2</nuxt-link
    >
    <nuxt-link to="/goods/comment/3?a=1&b=2">评论03</nuxt-link>
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$show();
  }
};
</script>

<template>
  <div class="container">
    <h3>数据交互</h3>
    <h4>同域资源</h4>
    <div>{{ title }}</div>
    <h4>跨越资源</h4>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    let res = await $axios({ url: "/data/list.json" });
    // console.log("读取到的静态资源", res.data);

    let res2 = await $axios({
      url: "/api/ranking/gender"
    });
    // console.log("res2", res2.data);
    return {
      title: res.data.title,
      msg: res2.data.male[0].title
    };
  },
  async fetch({ $axios }) {
    // let res = await $axios({ url: "/data/list.json" });
    // console.log("res", res.data.title);
  },
  components: {}
};
</script>

<style></style>

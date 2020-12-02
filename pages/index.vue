<template>
  <div class="container">
    <h3>数据交互</h3>
    <h4>同域资源</h4>
    <div>{{ title }}</div>
    <h4>跨域资源</h4>
    <div>{{ home }}</div>
    <h4>vuex</h4>
    <button @click="getStore()">编程式操作</button>
    <div>index getters:{{ getNav }}</div>
    <div>index state:{{ bNav }}</div>
    <div>user state:{{ msg }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  async asyncData({ $axios }) {
    let res = await $axios({ url: "/data/list.json" });
    // console.log("读取到的静态资源", res.data);

    // let res2 = await $axios({
    //   url: "/api/ranking/gender"
    // });
    // console.log("res2", res2.data);
    console.log(res.data);
    return {
      title: res.data.title
      // msg2: res2.data.male[0].title
    };
  },
  async fetch({ $axios, store, error }) {
    let res = await $axios({ url: "/api/ranking/gender" });
    // console.log("res", res.data.title);
    res.data &&
      store.commit("home/M_UPDATE_HOME", {
        err: 0,
        data: res.data.male[0].title
      });
  },
  components: {},
  methods: {
    getStore() {
      //编程式访问vuex
      //发出action请求给user模块
      // this.$store.dispatch("user/A_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: { title: "user模块action提交的数据" }
      // });
      //发出mutations请求
      // this.A_UPDATE_USER({
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: { title: "123" }
      // });
      this.M_UPDATE_USER({
        err: 0,
        msg: "登录成功",
        token: "假token",
        data: { title: "456" }
      });

      // this.$store.commit("user/M_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "假token",
      //   data: { title: "组件携带过去的数据" }
      // });
    },
    ...mapActions("user", ["A_UPDATE_USER"]),
    ...mapMutations("user", ["M_UPDATE_USER"])
  },
  computed: {
    ...mapGetters(["getNav"]),
    ...mapState(["bNav"]),
    ...mapState("user", ["msg"]),
    ...mapState({ home: state => state.home.data })
  }
};
</script>

<style></style>

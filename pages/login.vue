<template>
  <div class="login">
    <h3>login</h3>
    <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$axios({
        url: "",
        methods: "post",
        data: {}
      }).then(res => {
        this.$cookies.set("user", "123123");
        this.$store.commit("user/M_UPDATE_USER", "123123");
        if (
          !this.$route.query.path ||
          /login|reg/.test(this.$route.query.path)
        ) {
          this.$router.replace("/user");
        } else {
          this.$router.replace(this.$route.query.path);
        }
      });
    }
  }
};
</script>

<template>
  <div class="login">
    <h3>login</h3>
    <el-divider></el-divider>
    <el-input v-model="username" placholder="请输入" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input v-model="password" placeholder="请输入" class="mb">
      <template slot="prepend">密码</template>
    </el-input>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="$router.push('/reg')">注册</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$axios({
        url: "",
        methods: "post",
        data: {}
      }).then(res => {
        this.$cookies.set("user", "123123");
        this.$store.commit("user/M_UPDATE_USER", { token: "123123" });
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
<style scoped>
.login {
  width: 35%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -17%;
  transform: translateY(-50%);
}
.mb {
  margin-bottom: 20px;
}
</style>

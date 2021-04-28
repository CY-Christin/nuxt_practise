<template>
  <div class="user">
    <h3>user</h3>
    <el-input
      class="pro_input"
      v-model="formData.astrict"
      size="mini"
      style="width:100px"
      @keyup.native="proving1"
    ></el-input>
  </div>
</template>
<script>
export default {
  // middleware({ store, redirect, params, query }) {
  //   console.log("middleware pages 组件独享守卫");
  //   redirect("/login");
  // }
  data() {
    return {
      formData: { astrict: "" }
    };
  },
  methods: {
    proving1() {
      this.formData.astrict = this.formData.astrict.replace(/[^\.\d]/g, ""); //清除"数字"和"."以外的字符
      this.formData.astrict = this.formData.astrict.replace(/^\./g, ""); //验证第一个字符是数字而不是.
      this.formData.astrict = this.formData.astrict.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的.
      this.formData.astrict = this.formData.astrict
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", "."); //只允许输入一个小数点
      this.formData.astrict = this.formData.astrict.replace(
        /^(\-)*(\d+)\.(\d\d).*$/,
        "$1$2.$3"
      ); //只能输入两个小数
    }
  }
};
</script>

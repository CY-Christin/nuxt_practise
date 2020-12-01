<template>
  <div class="user">
    <h3>user</h3>
  </div>
</template>
<script>
export default {
  middleware({ store, redirect, params, query }) {
    console.log("middleware pages 组件独享守卫");
    redirect("/login");
  }
};
</script>

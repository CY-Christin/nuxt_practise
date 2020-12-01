<template>
  <div class="reg">
    <h3>reg</h3>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    let bl = window.confirm("是否要离开");
    next(bl);
  }
};
</script>

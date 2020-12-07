<template>
  <div v-if="loading">loading.....</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Loading extends Vue {
  //data元数据=实例属性
  loading: boolean = false;
  //methods方法==类内的实例
  start(): void {
    this.loading = true;
  }
  finish(): void {
    this.loading = false;
  }
}
// export default {
//   data: () => ({
//     loading: false
//   }),
//   methods: {
//     start() {
//       this.loading = true;
//     },
//     finish() {
//       this.loading = false;
//     }
//   }
// };
</script>
<style scoped></style>

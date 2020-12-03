import Vue from "vue";
let show = () => console.log("全局方法");
Vue.prototype.$show = show; //服务端的狗子内部无法使用,this不会指向vue实例

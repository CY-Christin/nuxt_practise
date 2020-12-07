import Vue from "vue";
let show = () => console.log("全局方法");
Vue.prototype.$show = show; //服务端的狗子内部无法使用,this不会指向vue实例

import * as filters from "../assets/script/filters";

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

import direct1 from "../assets/script/directives/direct1";
import direct2 from "../assets/script/directives/direct2";
Vue.directive("direct1", direct1);
Vue.directive("direct2", direct2);
Vue.mixin({
  methods: {
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [
          {
            hid: "description",
            name: "keywords",
            content
          }
        ].concat(payload)
      };
    }
  }
});

function direc2(el, binding, vnode) {
  console.log("全局指令2");
}

export default {
  inserted(el, binding, vnode) {
    direc2(el, binding, vnode);
  },
  componentUpdate(el, binding, vnode) {
    direc2(el, binding, vnode);
  }
};

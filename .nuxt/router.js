import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ca7c2fda = () => interopDefault(import('../pages/goods/index.vue' /* webpackChunkName: "pages/goods/index" */))
const _0327e423 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6470604e = () => interopDefault(import('../pages/reg.vue' /* webpackChunkName: "pages/reg" */))
const _460a4601 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _944eb636 = () => interopDefault(import('../pages/weiPic.vue' /* webpackChunkName: "pages/weiPic" */))
const _5e2a58e0 = () => interopDefault(import('../pages/goods/comment.vue' /* webpackChunkName: "pages/goods/comment" */))
const _1848b763 = () => interopDefault(import('../pages/goods/comment/index.vue' /* webpackChunkName: "pages/goods/comment/index" */))
const _3f8244e0 = () => interopDefault(import('../pages/goods/comment/_uid.vue' /* webpackChunkName: "pages/goods/comment/_uid" */))
const _57c0d33b = () => interopDefault(import('../pages/goods/_id.vue' /* webpackChunkName: "pages/goods/_id" */))
const _3980410c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/goods",
    component: _ca7c2fda,
    name: "goods"
  }, {
    path: "/login",
    component: _0327e423,
    name: "login"
  }, {
    path: "/reg",
    component: _6470604e,
    name: "reg"
  }, {
    path: "/user",
    component: _460a4601,
    name: "user"
  }, {
    path: "/weiPic",
    component: _944eb636,
    name: "weiPic"
  }, {
    path: "/goods/comment",
    component: _5e2a58e0,
    children: [{
      path: "",
      component: _1848b763,
      name: "goods-comment"
    }, {
      path: ":uid",
      component: _3f8244e0,
      name: "goods-comment-uid"
    }]
  }, {
    path: "/goods/:id",
    component: _57c0d33b,
    name: "goods-id"
  }, {
    path: "/",
    component: _3980410c,
    name: "index"
  }, {
    path: "/index",
    component: _3980410c,
    name: "home"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

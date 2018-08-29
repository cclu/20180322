import Router from 'vue-router'
import routes from './router'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'active-exact'
  })
}

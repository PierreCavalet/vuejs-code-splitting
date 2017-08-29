import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// loads compoents as async component and with a code split point
const Goodbye = () => import('@/components/Goodbye')
const Foo = () => import('@/components/Foo')
const Bar = () => import('@/components/Bar')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/goodbye',
      name: 'goodbye',
      component: Goodbye
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
})

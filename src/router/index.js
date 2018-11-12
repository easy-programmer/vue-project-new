import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGrid from '@/components/table/HelloGrid'
import SmGrid from '@/components/table/smGrid'
import Movie from '@/components/table/Movie'
import HelloBoard from '@/components/HelloBoard'
import SmBoard from '@/components/SmBoard'
import VuetifyTable from '@/components/table/VuetifyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloGrid',
      name: 'HelloGrid',
      component: HelloGrid
    },
    {
      path: '/smGrid',
      name: 'SmGrid',
      component: SmGrid
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/HelloBoard',
      name: 'HelloBoard',
      component: HelloBoard
    },
    {
      path: '/smBoard',
      name: 'SmBoard',
      component: SmBoard
    },
    {
      path: '/vuetifyTable',
      name: 'VuetifyTable',
      component: VuetifyTable
    }
  ]
})

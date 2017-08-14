import Vue from 'vue'
import Router from 'vue-router'
import aboutme from '@/components/AboutMe'
import MySkill from '@/components/MySkill'
import MyWorks from '@/components/MyWorks'
import MyRepositories from '@/components/MyRepositories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: aboutme
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: aboutme
    },
    {
      path: '/MySkill',
      name: 'MySkill',
      component: MySkill
    },
    {
      path: '/MyWorks',
      name: 'MyWorks',
      component: MyWorks
    },
    {
      path: '/MyRepositories',
      name: 'MyRepositories',
      component: MyRepositories
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Notes from '../views/Notes.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
  	path: '/edit/id=:id',
  	name: 'edit',
  	component: Edit
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router

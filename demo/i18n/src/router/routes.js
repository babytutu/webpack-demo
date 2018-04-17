const routes = [
  {
    path: '/',
    component: () => import('src/view/index/index.vue'),
    meta: {
      title: 'home'
    }
  },
  {
    path: '/count',
    component: () => import('src/view/count/count.vue'),
    meta: {
      title: 'count'
    }
  },
]

export default routes

import Main from '@/view/main'
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
      title: '融汇易捷'
  },
  component: () => import('@/view/login.vue')
};
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/index',
  component: Main,
  children: [
      { path: 'index', meta: {
          title: '首页'
      }, name: 'index', component: () => import('@/view/index.vue') }
  ]
};


export const routers = [
  loginRouter,
  ...otherRouter
]
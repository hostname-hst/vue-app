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
      { path: 'index', meta: {title: '首页'}, name: 'index', component: () => import('@/view/index.vue') },
      { path: 'order', meta: {title: '订单'}, name: 'order', component: () => import('@/view/order.vue') },
      { path: 'message', meta: {title: '消息'}, name: 'message', component: () => import('@/view/message.vue') },
      { path: 'person', meta: {title: '我的'}, name: 'person', component: () => import('@/view/person.vue') },
  ]
};


export const routers = [
  loginRouter,
  otherRouter
]
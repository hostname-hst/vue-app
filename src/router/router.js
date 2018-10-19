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
export const orderRouter = [
  {
    path:'/postOrder',
    name:'postOrder',
    meta:'订单需求',
    component:()=>import('@/view/orderPost/postOrder.vue')
  },
  {
    path:'/orderBase',
    name:'orderBase',
    meta:'订单信息',
    component:()=>import('@/view/orderPost/orderBase.vue')
  },
  {
    path:'/houseInfo',
    name:'houseInfo',
    meta:'房屋信息',
    component:()=>import('@/view/orderPost/houseInfo.vue')
  },
  {
    path:'/orderDetail',
    name:'orderDetail',
    meta:'订单详情',
    component:()=>import('@/view/orderDetail.vue')
  },
  {
    path:'/incomeDetail',
    name:'incomeDetail',
    meta:'返费明细',
    component:()=>import('@/view/incomeDetail.vue')
  },
  {
    path:'/personInfo',
    name:'personInfo',
    meta:'个人信息',
    component:()=>import('@/view/personInfo.vue')
  },
  {
    path:'/editPerson',
    name:'editPerson',
    meta:'编辑信息',
    component:()=>import('@/view/editPerson.vue')
  },
  {
    path:'/loanSche',
    name:'loanSche',
    meta:'贷款方案',
    component:()=>import('@/view/loanSche.vue')
  },
]
  

export const routers = [
  loginRouter,
  ...orderRouter,
  otherRouter,
  
]
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'opt',
        component: () => import('../views/children/productList.vue')

      },
    {
      path:'/productDescription',
      component: () => import('../views/children/productDescription.vue') 
    },
    
    {
      path:'/merchantHome',
      component: () => import('../views/children/merchantHome.vue') 
    },
    {
      path:'/search',
      component: () => import('../views/children/searchResult.vue') 
    },
    {
      path:'/cart',
      component: () => import('../views/children/cart.vue') 
    },
    {
      path:'/merchantAdd',
      component: () => import('../views/children/MerchantAdd.vue') 
    },
    {
      path:'/categoryView',
      component: () => import('../views/children/category.vue') 
    },
    {
      path:'/particularProduct',
      component: () => import('../views/children/particularProduct.vue') 
    },
    {
      path:'/createNewProduct',
      component: () => import('../views/children/createNewProduct.vue') 
    },
    {
      path:'/AddStock',
      component: () => import('../views/children/AddStock.vue') 
    },
    {
      path:'/updateProduct',
      component: () => import('../views/children/updateProduct.vue') 
    },
    {
      path:'/checkout',
      component: () => import('../views/children/checkout.vue') 
    },
    {
      path:'/orderDetails',
      component: () =>  import('../views/children/orderDetails.vue') 
    },
    {
      path:'/orderlog',
      component: () =>  import('../views/children/orderLog.vue')  
    },
    {
      path:'/sales',
      component: () =>  import('../views/children/sales.vue')  
    },
    {
      path:'/loginLog',
      component: () =>  import('../views/children/loginLog.vue')  
    },
    {
      path:'/profile',
      component: () =>  import('../views/children/profile.vue')  
    }
    
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signUpUser',
    name: 'signUp',
    component: () => import('../views/signUpUser.vue')
  },
  {
    path: '/merchantRegister',
    name: 'signUp',
    component: () => import('../views/merchantRegister.vue')
  }
  
]

const router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history'
})

export default router

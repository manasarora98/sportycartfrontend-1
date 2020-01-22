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
      path:'/updateProduct',
      component: () => import('../views/children/updateProductMerchant.vue') 
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
    }
    
    ]
  }
  
]

const router = new VueRouter({
  routes,
  hashbang: false,
  mode: 'history'
})

export default router

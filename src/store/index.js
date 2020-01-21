import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    "product": '',
    "searchString":'',
    "categoryId":''
    
  },
  getters:{
    product(state){
      return state.product
    },
    searchString(state){
      return state.searchString
    },
    categoryId(state){
      return state.categoryId
    }
  },
  mutations: {
    product (state, payload) {
      state.product = payload
    },
    searchString(state,payload){
      state.searchString=payload
    },
    categoryId(state,payload){
      state.categoryId=payload
    }
  },
 



  modules: {
  }
})

export default store

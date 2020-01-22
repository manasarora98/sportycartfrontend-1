import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    product: '',
    searchString:'',
   merchantProduct:'',
    searchResult:[],
    category:[],

    
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
    },
    getSearchResult(state){
      return state.searchResult
    },
    getCategory(state){
      return state.category
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
    },
    setSearchResult(state,payload){
        state.searchResult=payload
    },
    setCategory(state,payload){
      state.category=payload
    }
   
  },
 actions:{
   search({commit},data){
    axios.get('http://172.16.20.131:8089/search/'+data)
    .then((resp)=>{
      window.console.log('this is store api call',resp)
      commit('setSearchResult',resp.data)
    })
   },
   category({commit},data){
        axios.get('http://172.16.20.131:8086/product/showProducts/'+data)
        .then((resp)=>{
          commit('setCategory',resp.data)
        })
   }
 },



  modules: {
  },
  
})

export default store

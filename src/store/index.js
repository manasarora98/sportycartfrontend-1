import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import {
  googleauthprovider,
  fbProvider
} from  '../../firebaseConfig'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    product: '',
    searchString:'',
    merchantProduct:'',
    searchResult:[],
    category:[],
    product_cart:[],
    product_details:[],
    confirmOrderDetails:[],
    merchantflag:false,
    loginDetailsUser: {
      isLoggedIn: false
    },
    flag: false
  

    
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
    },
    getLoginDetailsUser(state){
       return state.loginDetailsUser
    },
    getFlag(state){
      return state.flag
    },
    getmerchantflag(state){
      return state.merchantflag
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
    },
    setLoginDetailUser(state,payload){
      state.loginDetailsUser = payload
      // state.loginDetailsUser= {
      //   ...payload
      // }
      // state.loginDetailsUser.isLoggedIn = true
    },
    setFlag(state,payload){
      window.console.log("in mutation",payload)
      state.flag=payload
    },
    setmerchantflag(state,payload){
      state.merchantflag=payload
    }
   
  },
 actions:{
   set({commit}){
     window.console.log("we are in the endgame")
    //  windowconsole.log("inside set")
     commit('setFlag',true)
   },
   search({commit},data){
    axios.get('http://172.16.20.131:8082/search-service/search/'+data)
    .then((resp)=>{
      window.console.log('this is store api call',resp)
      commit('setSearchResult',resp.data)
    })
   },
   category({commit},data){
     const params={
       pageSize:10,
       pageNo:0
     }
        axios.get(`http://172.16.20.131:8082/product-service/product/showProducts/${data}`,{params})
        .then((resp)=>{
          window.console.log(resp)
          commit('setCategory',resp.data.content)
        })
   },
   login ({commit}, {data, success, fail}) {
     axios.post('http://172.16.20.131:8082/login-service/login', data).
     then((res) => {
       commit('setFlag', true)
       window.console.log(res.data)
       success && success(res.data)
     }).catch((res) => {
       fail && fail(res)
     })
   },
   merchantlogin ( context,{data, success, fail}) {
    window.console.log("hi i am in store")
    axios.post('http://172.16.20.131:8082/merchant-service/merchant/login', data).
    then((res) => {
      // commit('setFlag', true)
      window.console.log("success")
      window.console.log(res.data)
      success && success(res.data)
    }).catch((res) => {
      fail && fail(res)
    })
  },
   googleauth({commit}) {
    firebase.auth().signInWithPopup(googleauthprovider).then(function (result) {
      var token = result.credential.idToken;
      var user = result.user;
  
      window.console.log("token: " + token + " ," + "user: " + user)
      axios.get('http://172.16.20.131:8082/login-service/googlelogin/'+token)
        .then(res => {window.console.log(res)
          localStorage.setItem('userId',res.data.userId)
        localStorage.setItem('accessToken',res.data.accessToken)
       
        commit('setFlag',true)
         });
 
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      window.console.log(errorCode + errorMessage + email + credential)
    })
  },
  fbAuth({commit}) {
    firebase.auth().signInWithPopup(fbProvider).then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;
      
      window.console.log("token: " + token + " ," + "user: " + user)
      axios.get('http://172.16.20.131:8082/login-service/facebooklogin/'+token)
      .then(res => {
        window.console.log(res)
   
        localStorage.setItem('userId',res.data.userId)
        localStorage.setItem('accessToken',res.data.accessToken)
        commit('setFlag',true)
        
        });
      
       
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      window.console.log(errorCode + errorMessage + email + credential)
    })
  }
 }


 
  
})

export default store

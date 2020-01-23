<template>
<v-btn @click="login">login</v-btn>
</template>
 <script>
  import axios from 'axios'
  export default {
      
    
    data: () => ({
      
      product:''
    }),
    methods:{
   async login(){
const resp = await axios.get(`http://172.16.20.114:8080/facebookLogin`)
window.console.log(resp)
// this.$router.push(resp.data)
// window.location.replace(resp.data)
window.open(resp.data)
    },
    
  
  },
//   async created(){

// this.product=this.$store.state.product
// window.console.log(this.product)

//   }
  }
</script>
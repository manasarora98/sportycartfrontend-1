<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    if (localStorage.getItem('userId')) {
      this.$store.commit('setFlag', true)
      this.$router.push('/')
    } else if(localStorage.getItem('mid')){
      this.$store.commit('setmerchantflag', true)
      this.$router.push('/merchantHome')
    }
    else{
        this.$router.push('/')
    }
  }
}
</script>


<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

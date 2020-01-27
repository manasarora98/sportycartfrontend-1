<template>
<div class="screen">
  <v-app id="inspire">
    <v-navigation-drawer style="background-color:#1565c0"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      
    >
      <h2><strong style="color:white" v-if="!getmerchantflag" >CATEGORIES</strong></h2> 
      <hr>
       <v-list v-if="!getmerchantflag">
        <template v-for="(item,i) in categories " >
          
            <p style="text-transform:uppercase" :key="i"   @click="callCategory(i)"><a ><strong style="color:white">{{item}}</strong></a></p>
                
                 
             </template>
      </v-list>
 
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
            <img src="../assets/SportyLogo.png" style="width:65px;height:65px;border-radius:10px">
        <span class="hidden-sm-and-down" @click="home()"  v-if="getFlag">SportyCart</span>
        <span class="hidden-sm-and-down" v-if="getmerchantflag">SportyCart</span>
      </v-toolbar-title>
      <v-text-field
      v-model="searchString"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        v-if="!getmerchantflag"
        
      />
       <v-btn  style="margin-left:10px;background-color:#0066cc;;" @click="searchFunc" v-if="!getmerchantflag">
         
     <i class="fa fa-search" style="font-size:20px; margin-right:5px;"></i>
      </v-btn>
      <v-spacer />
      
 <v-btn  style="margin-left:10px;background-color:#0066cc;;" @click="cart" v-if="!getmerchantflag">
      <i class="fa fa-shopping-cart" style="font-size:20px; margin-right:5px;"></i>  
      </v-btn>
     <v-btn  style="margin-left:10px;background-color:#0066cc;;" @click="login" v-if="!getFlag" >
       <i class="fa fa-user-o" style="font-size:20px; margin-right:5px;"></i> Log/Reg
      </v-btn>
     
       <v-btn  style="background-color:#0066cc;;margin-left:20px" @click="orderlog"      v-if="getFlag"  >
      <i class="fa fa-archive" style="font-size:20px; margin-right:5px;"></i>  OrdLog
      </v-btn>
       <v-btn  style="background-color:#0066cc;;margin-left:20px" @click="loginlog"    v-if="getFlag" >
      <i class="fa fa-history" style="font-size:20px; margin-right:5px;"></i>  LoginLog
      </v-btn>
       <v-btn  style="background-color:#0066cc;;margin-left:20px" @click="profile"    v-if="getFlag" >
      <i class="fa fa-history" style="font-size:20px; margin-right:5px;"></i>  profile
      </v-btn>
      <v-btn  style="background-color:#0066cc;margin-left:20px" @click="logout" v-if="getFlag || getmerchantflag" >
        <i class="fa fa-sign-out" style="font-size:20px; margin-right:5px;"></i>
      </v-btn>
     
      
      <!-- <v-btn icon>
        <v-icon>add_shopping_cart</v-icon>
      </v-btn> -->
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /> -->
          </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <!-- <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-tooltip right>
           
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
           
            <span>Codepen</span>
          </v-tooltip>
        </v-row>
      </v-container> -->
       <v-container fluid fill-height class="content"  style="background-color:#357ECA">
        <v-layout  >
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    
    
  </v-app>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      categories:[
       'merchandise','cricket','fitness','badminton','tennis'
      ],
      searchString:'',
     
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
    computed:{
      ...mapGetters(['getFlag']),
      ...mapGetters(['getmerchantflag']),
       ...mapGetters(['getnewflag'])
    },
    methods:{
      searchFunc(){
       this.$store.dispatch('search',this.searchString)
       if(this.$router.currentRoute !=='/search')
       this.$router.push('/search')
      },
      cart(){
this.$router.push('/cart')
      }
      ,
      merchantAdd(){
        this.$router.push('/merchantHome')
      },
      login(){this.$router.push('/login')},
      profile(){
        this.$router.push('/profile')
      },
      loginlog(){
        window.console.log("fdgtdgrtfghgf")
        this.$router.push('/loginLog')},
      logout(){
       
        localStorage.removeItem('userId')
        localStorage.removeItem('accessToken')  
        localStorage.removeItem('mid') 
         localStorage.removeItem('email') 
      this.$store.commit('setFlag',false)
   
        this.$store.commit('setmerchantflag', false)
        this.$router.push('/')
        },
        orderlog(){
          this.$router.push('/orderlog')
        },
      home(){this.$router.push('/')},
      callCategory(i){
       window.console.log(i)
       this.$store.dispatch('category',i+1)
      
      // this.$store.state.categoryId=i+1
      if(this.$router.currentRoute !=='/categoryView')
        this.$router.push('/categoryView')
      }
    }
  }
</script>
<style scoped>
.container.fill-height {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background-color:#1565c0;
}
</style>
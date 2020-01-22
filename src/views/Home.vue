<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <h2><strong>Categories</strong></h2> 
      <br>
       <v-list >
        <template v-for="(item,i) in categories " >
          
            <p :key="i"   @click="callCategory(i)"><a ><strong>{{item}}</strong></a></p>
                
                 
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
        <span class="hidden-sm-and-down">SportyCart</span>
      </v-toolbar-title>
      <v-text-field
      v-model="searchString"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        
      />
       <v-btn  style="margin-left:10px;background-color:green;" @click="searchFunc">
        Search
      </v-btn>
      <v-spacer />
      
 <v-btn  style="margin-left:10px;background-color:green;" @click="cart" >
        Cart
      </v-btn>
     <v-btn  style="margin-left:10px;background-color:green;" >
        Log/reg
      </v-btn>
      <v-btn  style="background-color:green;margin-left:20px"  @click="merchantAdd">
        MER/reg
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
       <v-container fluid fill-height class="content">
        <v-layout>
          <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    
    
  </v-app>

</template>

<script>
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
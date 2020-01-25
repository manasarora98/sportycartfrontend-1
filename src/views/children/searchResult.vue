<template>
  <v-container>
<v-layout row wrap>


    <v-flex xs12 md4 px-2 mb-4 v-for="(product, index) in getSearchResult" :key="index">
            <v-card color="blue-grey lighten-2" class="white--text" @click="description(product)">
              <v-layout row>
                <v-flex xs4 md4>
                     <v-img :src="product.imageUrl"
              aspect-ratio="1"
              class="grey lighten-2"
               max-width="350"
               max-height="250">
           </v-img>

                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                         <div>{{product.description}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   <div  ><h4>{{product.name}}</h4></div>
                <v-spacer></v-spacer>
                <v-btn  color="blue">Add To Cart</v-btn>

              </v-card-actions>
            

            </v-card>
    </v-flex>




                </v-layout>
                </v-container>
</template>

<script>
  // import axios from 'axios'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      
    },
    data() {
      return {

       products:[]
      }
    },
    methods: {
     description(product){
     this.$store.state.product=product
     window.console.log(this.$store.state.product)
     this.$router.push('/productDescription')
     } 

     
    },
     computed: {
    search() {
      let search = this.$store.getters.searchString;
      return search;
    },
    ...mapGetters(['getSearchResult'])
    }
    ,
    
  }

</script>
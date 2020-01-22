 <template>
 <v-layout row wrap >
     <v-flex xs12 md12 px-2 mb-4 >
            <v-card color="blue-grey lighten-2" class="white--text" >
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
                        <h2>Description</h2>
                         <p>product.description</p>
                    </div>
                
                    
                  </v-card-title>
                  <h2>Attributes</h2>
                  <p v-for="(attribute,value) in product.productAttributes" :key="value">{{value}}:{{attribute}}</p>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   <div  ><h4>{{product.name}}</h4></div>
                <v-spacer></v-spacer>
               <v-btn  style="background-color:green" @click="addStock"> Add This Product</v-btn>
                <v-btn  @click="createNew">Create New Product</v-btn>
              </v-card-actions>
              

            </v-card>
    </v-flex>
  </v-layout>
  </template>
  <script>
//   import axios from 'axios'
  export default {
      
    props: {
      //productid: String,
    },
    data: () => ({
      
      product:''
    }),
    methods:{
     createNew(){
        this.$router.push('/createNewProduct') 
     }
     ,
     addStock(){
       this.$store.state.merchantProduct=this.product
       this.$router.push('/AddStock')
     }
  
  },
  async created(){

this.product=this.$store.state.product
window.console.log(this.product)

  }
  }
</script>

  
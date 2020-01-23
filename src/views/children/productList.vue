<template>
  <v-container>
<v-layout row wrap>


    <v-flex xs12 md6 px-2 mb-4 v-for="(product,index) in products" :key="index">
            <v-card color="blue lighten-5" class="white--text" @click="description(product)">
             <!-- optional color --blue lighten-5 -->
              <v-layout row>
                <v-flex xs7 md4>
                 <v-img style="margin:20px;" :src="product.imageUrl"
              aspect-ratio="1"
              class="grey lighten-2"
               max-width="350"
               max-height="250">
           </v-img>
           
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                         <!-- <div style="text-transform: Capitalize; color:black;font-family:Courier New;font-size:15px;">{{product.description}}</div> -->
                      <div  ><h4 style="text-transform: uppercase;color:black">{{product.name}}</h4></div>
                <v-spacer></v-spacer>
                <v-btn style="float:left;" flat color="blue">Add To Cart</v-btn>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <!-- <v-card-actions>
                   <div  ><h4 style="text-transform: uppercase;color:black">{{product.name}}</h4></div>
                <v-spacer></v-spacer>
                <v-btn flat color="blue">Add To Cart</v-btn>

              </v-card-actions> -->
            

            </v-card>
    </v-flex>




                </v-layout>
                </v-container>
</template>

<script>
  import axios from 'axios'
  
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
    async created() {
      try {
      
      const resp = await axios.get(`http://172.16.20.131:8086/product/getAllProducts`);
    // const resp = await axios.get(`http://localhost:8082/productService/product/getAllProducts`)

      window.console.log(resp)
    //   this.quarterName = resp.data.item.quarter_name;
    //   const blocks = [];
    //   resp.data.item.block.forEach( (block) => {
    //     const b = {};
    //     b['_id'] = block._id;
    //     b['name'] = block.block_name;
    //     blocks.psush(b);
    //   })
     this.products = [...resp.data];
     window.console.log(this.products)
      } catch (e) {
        window.console.log(e);
      }
    },
    computed: {
    }
  }

</script>
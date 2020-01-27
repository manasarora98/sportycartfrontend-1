
<template>
<v-layout row wrap>


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
                         <p>{{product.description}}</p>
                    </div>
                
                    
                  </v-card-title>
                  <h2>Attributes</h2>
                  <p v-for="(attribute,value) in product.productAttributes" :key="value">{{value}}:{{attribute}}</p>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   <div  ><h4>{{product.name}}</h4></div>
                <v-spacer></v-spacer>
               

              </v-card-actions>
              

            </v-card>
    </v-flex>



    <v-flex xs12 md4 px-2 mb-4 v-for="(merchant,i) in merchants" :key="i">
            <v-card color="blue-grey lighten-2" class="white--text" @click="description(product)">
              <v-layout row>
        
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                          <p>Merchant:{{i+1}}</p>
                         <p>STOCK  :   {{merchant.stock}}</p>
                         <h4>PRICE  :  {{merchant.price}}</h4>
                    </div>
                    <v-rating 
      v-model="merchant.merchantRating"
      background-color="blue lighten-3"
      color="blue"
      x-large
    ></v-rating>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   
                <v-spacer></v-spacer>
                <v-btn flat color="blue" @click="addToCart(merchant.merchantId,merchant.productId,merchant.price)">Add To Cart</v-btn>

              </v-card-actions>
             

            </v-card>
    </v-flex>




                


                </v-layout>
                </template>


                <script>
  import axios from 'axios'
  
  export default {
    components: {
      
    },
    data() {
      return {
       product:'',
       merchants:[],
       USERID:'',
      }
    },
    methods: {
     description(product){
     this.$store.state.product=product
     window.console.log(this.$store.state.product)
     this.$router.push('/productDescription')
     } ,
     rand(min, max) {
  if (min==null && max==null)
    return 0;    
  
  if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  },
    async addToCart(mid,pid,price){
         window.console.log(mid)
         window.console.log("inside")
        if(localStorage.getItem('userId'))
          this.USERID=localStorage.getItem('userId')
          else{
           if(!localStorage.getItem("temporaryId"))
           { let valu = this.rand(3000,1000);
        localStorage.setItem('temporaryId', valu)
        this.USERID=valu
           }
           else
           this.USERID=localStorage.getItem('temporaryId')
          }
        const resp = await axios.post(`http://172.16.20.131:8082/order-service/cart/addToCart`,{
            userId:this.USERID,


            merchantId:mid,
            quantity:1,
            price:price,
            productId:pid

        });
        window.console.log(resp)
         
     }
     
    },
  
    async created() {
      try {
      this.product=this.$store.state.product
      const resp = await axios.get(`http://172.16.20.131:8082/merchant-service/productList/getProductList/${this.product.productId}`);
     
     //sort the reponse based on merchant rating
     this.merchants = [...resp.data];
     window.console.log(this.merchants)
     
      } catch (e) {
        window.console.log(e);
      }
    },
    computed: {
    }
  }

</script>
<template>
  <v-container>
<v-layout row wrap>


    <v-flex xs12  px-2 mb-4  md6  v-for=" (product,i) in products_details"  :key="i" >
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
                         <!-- <div>{{product.description}}</div> -->
                         <h4>Name:{{product.name}}</h4>
                         <h4>Price:{{products_cart[i].price}}</h4>
                         <h4>Quantity:{{products_cart[i].quantity}}</h4>
                         <!-- <h3>Total -->
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   
                <v-spacer></v-spacer>
              
               

              </v-card-actions>
            

            </v-card>
    </v-flex>




                </v-layout>
                <v-layout>
                   <v-flex xs12  px-2 mb-4   >
            <v-card color="blue-grey lighten-2" class="white--text" >
             
              <v-card-actions>
                   <h3>Total:{{totalSum}}</h3>
                <v-spacer></v-spacer>
              
               <v-btn  style="background-color:green" @click="confirmOrder">Confirm Order</v-btn>

              </v-card-actions>
            

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
        products_cart:[],
        products_details:[],
        product_ids:[],
        totalSum:0,
        userId:''
       
      }
    },
    methods: {
      
      // callCheckout(){
      //   this.$store.state.product_cart=this.products_cart
      //   this.$store.state. product_details=this.products_details
      //   this.$router.push('/checkout')
      // }
      
     async confirmOrder(){
const resp = await axios.post(`http://172.16.20.131:8082/order-service/order/checkout/${this.userId}`,this.products_cart)
window.console.log(resp)
 this.$store.state.confirmOrderDetails=[...resp.data]
 this.$router.push('/orderDetails')

      }
    
  
    },
    
    created(){
      this.products_cart=this.$store.state.product_cart
      this.products_details=this.$store.state.product_details
      this.products_cart.forEach(item => {
          
         this.totalSum= parseInt(this.totalSum) + parseInt(item.price)*parseInt(item.quantity)
         window.console.log(this.products_cart)
        });

        //change this thing
        this.userId=this.products_cart[0].userId
        // window.console.log(this.userId)
       

    }
 
   
  }

</script>
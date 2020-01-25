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
                         <h2>Name:{{product.name}}</h2>
                         <h3>Price:{{products_cart[i].price}}</h3>
                         
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-card-actions>
                   
                <v-spacer></v-spacer>
              
                <v-btn flat color="blue" @click="addProduct(i)">Add</v-btn>
                 <input type="text" style="width:10%;background-color:white;color:blue"   v-model="products_cart[i].quantity" required/>
                <v-btn flat color="blue" @click="removeProduct(i)">Remove</v-btn>

              </v-card-actions>
            

            </v-card>
    </v-flex>




                </v-layout>
                <v-layout justify-center >
                  <v-btn style="background-color:#40883c" @click="callCheckout"> CHECKOUT</v-btn>
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
        USERID:''
      }
    },
    methods: {
      async addProduct(i){
        
          this.products_cart[i].quantity=this.products_cart[i].quantity+1
      const resp = await axios.get(`http://172.16.20.131:8082/order-service/cart/cartIncrement/${this.products_details[i].productId}/${this.USERID}/${this.products_cart[i].quantity}/${this.products_cart[i].merchantId}`);
      window.console.log(resp);
      },
      async removeProduct(i){
          
          if(this.products_cart[i].quantity>0){
            this.products_cart[i].quantity=this.products_cart[i].quantity-1
          const resp = await axios.get(`http://172.16.20.131:8082/order-service/cart/cartIncrement/${this.products_details[i].productId}/${this.USERID}/${this.products_cart[i].quantity}/${this.products_cart[i].merchantId}`);
          window.console.log(resp);
          }
          if(this.products_cart[i].quantity==0){
            const resp = await axios.get(`http://172.16.20.131:8082/order-service/cart/deleteCartRow/${this.USERID}/${this.products_cart[i].merchantId}/${this.products_details[i].productId}`);
          window.console.log(resp);
          }
          
      },
      callCheckout(){
        if(localStorage.getItem('userId')){
        this.$store.state.product_cart=this.products_cart
        this.$store.state. product_details=this.products_details
        this.$router.push('/checkout')
        }
        else{
          this.$router.push('/login')
        }
      }
    
  
    },
 
    async created() {
      try {
        //if login then first replace the temporary id in database with userid
        if(localStorage.getItem('userId'))
        this.USERID=localStorage.getItem('userId')
        else
        this.USERID=localStorage.getItem('temporaryId')
        
        //then fetch the cart of logedIn user
        //if not logedin fetch cart with temporary id
        window.console.log(localStorage.getItem("temporaryId"))
      const resp = await axios.get(`http://172.16.20.131:8082/order-service/cart/getCart/${this.USERID}`);
       this.products_cart=[...resp.data]
       this.products_cart.forEach(element => {
           this.product_ids.push(element.productId);
       });
       const resp1 = await axios.post(`http://172.16.20.131:8082/product-service/product/getProductsByIds`,{
           productIds:this.product_ids
         
       })
       this.products_details=[...resp1.data]
         window.console.log(resp)
         window.console.log(this.product_ids)
           window.console.log(resp1)
        
       
     
      } catch (e) {
        window.console.log(e);
      }
    }
  }

</script>
<template>
  <v-container>
    <!-- <v-layout row wrap justify-center>
     <h2 style="color:#4b80aa">Orders Log</h2>
    </v-layout>-->
    <v-layout row wrap>
      <v-flex xs12 px-2 mb-4 md6 v-for=" (product,i) in products_details" :key="i">
        <v-card color="blue-grey lighten-3" >
          <v-layout row>
            <v-flex xs4 md4>
              <v-img
                :src="product.imageUrl"  style="margin:10px 5px 5px 20px;"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="350"
                max-height="250"
              ></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                    <h4>OrderId:{{order_details[i].orderId}}</h4>
                    
                  <h4>Name:{{product.name}}</h4>
                  <h4>Price:{{order_details[i].price}}</h4>
                  <h4>Quantity:{{order_details[i].quantity}}</h4>
                  <div @click="setRating(i)">
                  <v-rating 
      v-model="order_details[i].rating"
      background-color="blue lighten-3"
      color="blue"
      x-large
    ></v-rating></div>
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
    
  </v-container>
</template>
<script>

  import axios from 'axios'
  
  export default {
    components: {
     
    },
    data() {
      return {
     
        order_details:[],
        status:true ,    
        userId:'',
        product_ids:[],
        products_details:[]
      }
    },
    methods: {
     async setRating(i){
     const resp = await axios.post(`http://172.16.20.131:8082/order-service/order/setProductRating/${this.order_details[i].orderId}/${this.order_details[i].productId}/${this.order_details[i].merchantId}/${localStorage.getItem('userId')}/${this.order_details[i].rating}`)
     window.console.log(resp)
      }
    },
    
  async  created(){    
const resp = await axios.get(`http://172.16.20.131:8082/order-service/order/getRecentOrders/${localStorage.getItem('userId')}`)
window.console.log(resp)

 this.order_details=[...resp.data]
  
       this.order_details.forEach(element => {
           this.product_ids.push(element.productId);
       });
       const resp1 = await axios.post(`http://172.16.20.131:8082/product-service/product/getProductsByIds`,{
           productIds:this.product_ids
         
       })
       this.products_details=[...resp1.data]
   
  }
  }

</script>
<template>
  <v-container>
 <v-layout row wrap justify-center>
     <h2 style="color:#4b80aa">{{msg}}</h2>
     </v-layout>     
<v-layout row wrap v-if="status"  style="margin-top:50px">


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
                        
                         <h4>Name:{{product.name}}</h4>
                        <star-rating active-color="#9c0000"></star-rating>
                         
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

//   import axios from 'axios'
  
  export default {
    components: {
     
    },
    data() {
      return {
        orderDetails:[],
        products_details:[],
        status:true ,
        msg:"Congratulations!! Your Order Got Placed , Please rate the Products  "   ,
        userId:''
      }
    },
    methods: {
      
    
      
    
    
  
    },
    
    created(){
      this.orderDetails=this.$store.state.confirmOrderDetails
      this.products_details=this.$store.state.product_details
      this.orderDetails.forEach(item => {
       if(item.status==false)
           this.status=false
           });

          if(this.status==false)
          this.msg="Sorry your order couldn't got placed , due to unavailability of some items" 

        //change this thing
        this.userId=this.products_cart[0].userId

    }
 
   
  }

</script>
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
                         <h3>Name:{{product.name}}</h3>
                         <h3>Price:{{products_cart[i].price}}</h3>
                         <h3>Quantity:{{products_cart[i].quantity}}</h3>
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
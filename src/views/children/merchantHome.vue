
<template >
<v-layout justify-center >
<div >
<h2> <b style="color:white">MERCHANT HOME</b></h2>
<h4>Sporty Cart Merchant Account...!</h4>
<p>You can add or update information about a product such as its price,
    variants, and availability from the Products page in the admin.</p>
<p>Fortunately, adding products to your SportyCart backend is quick and simple.</p>
<!-- <v-btn style="background-color:#0066cc;" @click="addProduct"><strong style="color:white">ADD PRODUCT</strong></v-btn><br><br> -->
<!-- <v-btn  style="background-color:#0066cc;" @click="updateProduct"><strong style="color:white">UPDATE PRODUCT</strong></v-btn ><br><br> -->
<!-- <button type="button" style="border:3px solid green"><strong>SALES</strong></button><br><br> -->
      <v-sheet class="text-center" height="200px" style="background-color:#357ECA">
        <v-btn style="margin-right:10px;background-color:#2195F3"
          class="mt-6"
         
          color="primary"
          @click="addProduct"
        ><i class="fa fa-plus-circle" style="font-size:20px;marign:70px;background-color:#2195F3"></i> ADD PRODUCT</v-btn>
        <v-btn
          class="mt-6"
         
          color="primary"
          @click="updateProduct"
        ><i class="fa fa-pencil-square-o" style="font-size:20px"></i>UPDATE PRODUCT</v-btn>
        <v-btn style="margin-left:10px;background-color:#2195F3"
          class="mt-6"
        
          color="primary"
          @click="sales"
        ><i class="fa fa-bar-chart"     style="font-size:20px"></i>SALES</v-btn>
      </v-sheet>
</div>

</v-layout>
</template>
<script>
export default {
    name:'merchant',
    methods:{
        addProduct(){
             this.$router.push('/merchantAdd')
        }
        ,
        updateProduct(){
            this.$router.push('/updateProduct')
        },
        sales(){
            this.$router.push('/sales')
        }
    }

}
</script>
<style scoped>
.merchantsection{
     margin: 10px 0px 0px 300px;
  width: 256px;
  height:350px;
  padding: 2px;
}
a{
    text-decoration: none;
}



</style>
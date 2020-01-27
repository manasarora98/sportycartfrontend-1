<template>
<v-layout  justify-center>
   <div>
    <!-- <i style="font-size:50px" class="fa">&#xf2bc;</i>
    <h3> Marchant Name:</h3>     -->
    <h3 style="color:white"><b>UPDATE PRODUCT</b></h3>
    <table>
  <tr>
    <th>Products</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td><select  id="mySelect5"  @change="getId()"  style="background-color:white;">
    <option value="" style="background-color:white;">ProductsList</option>
    <option v-for="(item,i) in products" :key="i" style="background-color:white;">
        {{ item.productName}}
    </option>
</select> </td>
    <td><input v-model="price" type="Number" style="background-color:white;"/></td>
    <td><input  v-model="stock" type="number" style="background-color:white;"></td>
  </tr>
</table>
<br>
<v-btn
          style="margin-:10px"
          class="mt-6"
          flat
          color="primary"
          @click="createNew"
        ><i class="fa fa-pencil-square-o" style="font-size:20px;marign:70px;"></i>Update PRODUCT</v-btn>
    </div>
    </v-layout>
</template>
 <script>
  import axios from 'axios'

  export default {
   
    
    data: () => ({
       products:'',
       productid:'',
       price:'',
       stock:''
    }),
    methods:{
        getId(){
this.productid=document.getElementById("mySelect5").selectedIndex-1;
        },
        async updat(){
            const resp=await axios.post(`http://172.16.20.131:8082/merchant-service/productList/updateProduct`,{
                productId:this.products[this.productid].productId,
                merchantId:localStorage.getItem('mid'),
                stock:this.stock,
                price:this.price
            })
            window.console.log(resp)

        }
     
    },
   async created(){
 const resp = await axios.get(`http://172.16.20.131:8082/merchant-service/productList/getProductNames/${localStorage.getItem('mid')}`)
  this.products=[...resp.data]
  window.console.log(resp)
    }
  }
</script>
<style scoped>
table{
width:auto;
}
table,tr,th,td{
    border:2px solid black;
    text-align:center;
    background-color:cornflowerblue;
}
</style>
<template>
    
   <div class="updateproduct">
    <!-- <i style="font-size:50px" class="fa">&#xf2bc;</i>
    <h3> Marchant Name:</h3>     -->
    <table style="width:100%">
    <caption> <strong style="color:#ff6666">UPDATE PRODUCT</strong></caption>
  <tr>
    <th>Products</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td><select  id="mySelect5"  @change="getId()"  style="background-color:green;width:100%">
    <option value="">products</option>
    <option v-for="(item,i) in products" :key="i">
        {{ item.productName}}
    </option>
</select> </td>
    <td><input v-model="price" type="Number"/></td>
    <td><input  v-model="stock" type="number"></td>
  </tr>
</table>
<br>
<v-btn style="background-color:#1a79c4" @click="updat">Update</v-btn>
    </div>
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
            const resp=await axios.post(`http://172.16.20.131:8082/merchantService/productList/updateProduct`,{
                productId:this.products[this.productid].productId,
                merchantId:8,
                stock:this.stock,
                price:this.price
            })
            window.console.log(resp)

        }
     
    },
   async created(){
 const resp = await axios.get(`http://172.16.20.131:8082/merchantService/productList/getProductNames/8`)
  this.products=[...resp.data]
  window.console.log(resp)
    }
  }
</script>
<style scoped>
.updateproduct{
     margin: 10px 0px 0px 256px;
  width: 256px;
  height:350px;
  padding: 2px;

}
table,tr,th,td{
    font-style: italic;
    font-size: 16px;
    width: auto;
    border:2px solid black;
    text-align: center;
    background-color:#e6f9ff;
    margin-left: 5px;
    margin-right: 15px;
}
th {
  background-color: #4CAF50;
  color: white;
}
.addbutton{
    text: center;
    background-color: green;
    color:white;
    margin-top: 10px;
    float: left;
    font-size: 35px;
}
</style>
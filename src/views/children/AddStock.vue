<template>
    
   <div class="updateproduct">
    
    <table style="width:100%">
    <caption> <strong style="color:#ff6666">ADDPRODUCT</strong></caption>
  <tr>
    
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    
    <td><input v-model="price" type="number"/></td>
    <td><input  v-model="stock" type="number"></td>
  </tr>
</table>
<br>
<v-btn style="background-color:#1D87DA"  @click="update">Add</v-btn>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data: () => ({
        count:0,
      price:'',
      stock:''
      
    }),
    methods:{
      async  update(){
          if(this.count<2){
          this.count=this.count+1;
          
      const resp = await axios.post(`http://172.16.20.131:8082/merchant-service/productList/addProduct`,{
       productId:this.$store.state.merchantProduct.productId,
       merchantId:localStorage.getItem('mid'),
       stock:this.stock,
       price:this.price
      })
      window.alert("added")
      window.console.log(resp)
        }
      }
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
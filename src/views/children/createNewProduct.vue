<template>
    <div >
        
       
    <table style="width:90%">
        <caption> <strong style="color:#ff6666">CREATE PRODUCT</strong></caption>
  <tr>
    <th>category</th>
    <th>ProductName</th> 
    <th>Image</th>
    <th>Price</th>
    <th>Descriptions</th>
    <th>specifications</th>
    <th>Stock</th>
  </tr>
  <tr>
   <select  id="mySelect2"  @change="findCategory()"  style="background-color:green;width:100%">
    <option value="">Select</option>
    <option v-for="(item,i) in categories" :key="i">
        {{ item}}
    </option>
</select> 
    <td><input v-model="productName" type="text"/></td>
    <td><input v-model="imageUrl"   type="url"/></td>
    <td><input v-model="price" type="Number"/></td>
    <td><textarea v-model="description"  rows="5" cols="30"></textarea></td>
    <td>Name:<input v-model="attribut" type="text">Value:<input v-model="value" type="text"><button @click="addAttributes">Add</button></td>
    <td><input v-model="stock" type="number"></td>
  </tr>
</table>
<br>
<button style="background-color:green;width:10%"  @click="sendData" >Add</button>
</div>
</template>
<script>
  import axios from 'axios'
export default {
    name:'addProducts',
    data(){
        return{
           categories:[
   
      'merchandise','cricket','football','badminton','tennis'
      ],
      categoryId:'',
      productName:'',
      imageUrl:'',
      price:'',
      description:'',
      stock:'',
      attributes:{},
      attribut:'',
      value:''

        }
    },
    methods:{
        findCategory(){
this.categoryId=document.getElementById("mySelect2").selectedIndex;
        },
        addAttributes(){
            let attri=this.attribut
            let val=this.value
            this.attributes[attri]=val
            this.attribut='',
            this.value=''
        },
      async  sendData(){
window.console.log("hi from mukul")
           
            let obj={}
            obj["categoryId"]=this.categoryId,
            obj["name"]=this.productName,
            obj['description']=this.description
             obj["productAttributes"]=this.attributes,
            obj["imageUrl"]=this.imageUrl,
            obj["merchantId"]=8
            obj["price"]=this.price,
            obj["stock"]=this.stock,
               window.console.log(obj)
        const resp = await axios.post(`http://172.16.20.131:8086/product/createProduct`,
        obj)
        window.console.log(resp)
        }}
}
</script>
<style scoped>
.addproduct{
     margin: 10px 0px 0px 300px;
  width: 256px;
  height:350px;
  padding: 2px;
}
table,tr,th,td{
    width: auto;
    border:2px solid black;
    text-align: center;
    background-color:#e6f9ff;
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
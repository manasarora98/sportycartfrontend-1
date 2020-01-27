<template>

    <div >
    <table>
        <caption style="font-size:30px;"> <strong style="color:white">CREATE A <b>NEW PRODUCT</b></strong></caption>
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
   <select  id="mySelect2"  @change="findCategory()"  style="background-color:white;">
    <option value="">Select</option>
    <option v-for="(item,i) in categories" :key="i">
        {{ item}}
    </option>
</select>
    <td><input v-model="productName" type="text" style="background-color:white;border-radius:5px;"/></td>
    <td><input v-model="imageUrl"   type="url" style="background-color:white;border-radius:5px;"/></td>
    <td><input v-model="price" type="Number" style="background-color:white;border-radius:5px;"></td>
    <td><textarea v-model="description"  rows="5" cols="30" style="background-color:white;border-radius:5px;"></textarea></td>
    <td>Name:<input v-model="attribut" type="text" style="background-color:white;border-radius:5px;" placeholder="Ex:Color"><br><br>
        Value:<input v-model="value" type="text" style="background-color:white;border-radius:5px;" placeholder="Ex:Red"><br>
        <v-btn style="margin:10px"
          class="mt-6"
          flat
          color="primary"
          @click="addAttributes"
        >ADD
</v-btn>
    <td><input v-model="stock" type="number" style="background-color:white;border-radius:5px;"></td>
  </tr>
</table>
<br>
<v-btn style="margin-:10px"
          class="mt-6"
          flat
          color="primary"
          @click="sendData"
        ><i class="fa fa-plus-circle" style="font-size:20px;marign:70px;"></i>ADD
</v-btn>
<!-- <button style="background-color:green;width:10%"  @click="sendData" >Add</button> -->
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
            obj["merchantId"]=localStorage.getItem('mid')
            obj["price"]=this.price,
            obj["stock"]=this.stock,
               window.console.log(obj)
        const resp = await axios.post(`http://172.16.20.131:8082/product-service/product/createProduct`,
        obj)
        window.alert("product createc")
        window.console.log(resp)
        }}
}
</script>
<style scoped>
table{
  float: left;
}
table,tr,th,td{
    border:2px solid black;
    text-align:center;
    background-color:cornflowerblue;
}
</style>
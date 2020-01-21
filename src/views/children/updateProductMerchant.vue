<template>
    
   <div class="updateproduct">
   
   
    <table style="width:100%">
    <caption> <strong style="color:#ff6666">UPDATE PRODUCT</strong></caption>
  <tr>
    <th>Products</th>
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    <td><select><option>select the list</option><option>select the list</option></select></td>
    <td><input type="Number"/></td>
    <td><input type="number"></td>
  </tr>
</table>
<br>
<button  style="background-color:green">Update </button>
    </div>
</template>
<script>
export default {
    
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
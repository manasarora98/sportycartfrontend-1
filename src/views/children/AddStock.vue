<template>
    
   <div class="updateproduct">
    <!-- <i style="font-size:50px" class="fa">&#xf2bc;</i>
    <h3> Marchant Name:</h3>     -->
    <table style="width:100%">
    <caption> <strong style="color:#ff6666">UPDATE PRODUCT</strong></caption>
  <tr>
    
    <th>Price</th>
    <th>Stock</th>
  </tr>
  <tr>
    
    <td><input type="Number"/></td>
    <td><input type="number"></td>
  </tr>
</table><v-btn style="background-color:#1D87DA" >Update</v-btn>
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
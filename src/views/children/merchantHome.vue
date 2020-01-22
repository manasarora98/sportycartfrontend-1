<template>
<div class="merchantsection">

<h3> Merchant Home</h3>
<br>
<button type="button" style="border:3px solid green" @click="addProduct"><strong>ADD PRODUCT</strong></button><br><br>
<button type="button" style="border:3px solid green" @click="updateProduct"><strong>UPDATE PRODUCT</strong></button><br><br>
<!-- <button type="button" style="border:3px solid green"><strong>SALES</strong></button><br><br> -->





</div>
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
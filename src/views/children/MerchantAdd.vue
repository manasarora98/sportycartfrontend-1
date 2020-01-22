  <template>
  <v-container>
  <v-layout row wrap justify-center>
      <v-flex  md12 xs12  px-2 mb-4 >
    
     <h1 >Add/Create Product</h1>
   
     </v-flex >
  </v-layout>
  <v-layout row wrap justify-center>
     
  <v-flex  md6 xs12  px-4 mb-4 >
   
<select  id="mySelect"  @change="category()"  style="background-color:green;width:100%">
    <option value="">Select Category</option>
    <option v-for="(item,i) in categories" :key="i">
        {{ item}}
    </option>
</select> 
    
  </v-flex>
   <v-flex  md6 xs12  px-4 mb-4 >
   
<select  id="mySelect1"  @change="selectProduct()"    style="background-color:green;width:100%">
    <option value="">Select Product</option>
    <option v-for="(product,i) in products" :key="i">
        {{ product.name}}
    </option>
</select> 
    
  </v-flex>
  </v-layout >
  <v-layout row wrap justify-center style="margin-top:100px">
           <v-flex >
    <v-btn style="background-color:#2196F3;" @click="createNew"> Create new Product</v-btn>
    </v-flex>
    </v-layout>
 </v-container>
  </template>
  <script>
  import axios from 'axios'
//   import product from './particularProduct.vue'
  export default {
      components: {
      //product
    },
    props: {
      source: String,
    },
    
    data: () => ({
        dialog:false,
      categories:[
   
      'merchandise','cricket','football','badminton','tennis'
      ],
      categorye:'',
      productIde:'',
      products:[]
    }),
    methods:{
     async category(){
          this.categorye=document.getElementById("mySelect").selectedIndex;
          window.console.log(this.category)
           const resp = await axios.get(`http://172.16.20.131:8086/product/showProducts/${this.categorye}`)
  this.products=[...resp.data]
  window.console.log()
      },
      selectProduct(){
           this.$store.state.product =this.products[document.getElementById("mySelect1").selectedIndex-1];
             window.console.log(this.productIde)
          this.$router.push('/particularProduct')
        
      },
      createNew(){
        this.$router.push('/createNewProduct') 
     }
    }
  }
</script>
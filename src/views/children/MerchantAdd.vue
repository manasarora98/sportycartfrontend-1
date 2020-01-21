  <template>
  <v-container>
  <v-layout row wrapjustify-center>
      <v-flex  md12 xs12  px-2 mb-4 >
    
     <h1 >Add/Create Product</h1>
   
     </v-flex >
  </v-layout>
  <v-layout row wrap justify-center>
     
  <v-flex  md6 xs12  px-4 mb-4 >
   
<select  id="mySelect"  @change="category()"  style="background-color:green;width:100%">
    <option value="">Select Shop</option>
    <option v-for="(item,i) in categories" :key="i">
        {{ item}}
    </option>
</select> 
    
  </v-flex>
   <v-flex  md6 xs12  px-4 mb-4 >
   
<select  id="mySelect"    style="background-color:green;width:100%">
    <option value="">Select Shop</option>
    <option v-for="(product,i) in products" :key="i">
        {{ product.name}}
    </option>
</select> 
    
  </v-flex>
  </v-layout >
 </v-container>
  </template>
  <script>
  import axios from 'axios'
  export default {
      
    props: {
      source: String,
    },
    data: () => ({
      categories:[
   
      'merchandise','cricket','football','badminton','tennis'
      ],
      category:'',
      products:[]
    }),
    methods:{
     async category(){
          this.category=document.getElementById("mySelect").selectedIndex;
           const resp = await axios.get(`http://localhost:8082/productService/product/showProducts/${this.category}`)
  this.products=[...resp.data]
      }
    }
  }
</script>
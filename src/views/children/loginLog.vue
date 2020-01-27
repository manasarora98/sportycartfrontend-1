<template>
  <v-container>
    <!-- <v-layout row wrap justify-center>
     <h2 style="color:#4b80aa">Orders Log</h2>
    </v-layout>-->
    <v-layout row wrap>
      <v-flex xs12 px-2 mb-4 md6 v-for=" (product,i) in login_details" :key="i">
        <v-card color="blue-grey lighten-2" class="white--text">
          <v-layout row>
          
            <v-flex xs7>
              <v-card-title primary-title>
                <div>
                    <h4>Time: {{product.time}}</h4>
                    
                 
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>
<script>

  import axios from 'axios'
  
  export default {
    components: {
     
    },
    data() {
      return {
     
       
        
        login_details:[]
      }
    },
    methods: {
    
    },
    
  async  created(){    
const resp = await axios.get(`http://172.16.20.131:8082/login-service/loginLog/${localStorage.getItem('userId')}`)
window.console.log(resp)

 this.login_details=[...resp.data]
  
       
   
  }
  }

</script>
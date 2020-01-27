
<template>
<v-layout row wrap  style="background-color:#357ECA">


    <v-flex xs12 md12 px-2 mb-4 >
            <v-card color="blue-grey lighten-3"  >
              <v-layout row>
                <v-flex xs4 md4>
                  
                 <v-img style="margin:30px;border-radius:400px;height:250px;width:250px;" :src="profile.userImageUrl" 
              aspect-ratio="1"
              class="grey lighten-2"
               max-width="350"
               max-height="250">
           </v-img>
                

                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div style="font-family:Comic Sans, Comic Sans MS, cursive;">
                        <h3>Name:<span style="margin-left:20px;font-family:Comic Sans, Comic Sans MS, cursive;">{{profile.userName}}</span></h3>
                        <h3>Phone Number:<span style="margin-left:20px;">{{profile.phoneNo}}</span></h3>
                         <h3>Address:<span style="margin-left:20px;">{{profile.address}}</span></h3>
                          <h3>Email:<span style="margin-left:20px;">{{profile.email}}</span></h3>
                         
                    </div>
               
                  
                    
                  </v-card-title>
                  
                </v-flex>
              </v-layout>
              <v-card-actions>
                   <!-- <div  ><h4>{{product.name}}</h4></div> -->
                <v-spacer></v-spacer>
               

              </v-card-actions>
              

            </v-card>
    </v-flex>





                


                </v-layout>
                </template>


                <script>
  import axios from 'axios'
  
  export default {
    components: {
      
    },
    data() {
      return {
        profile:''
      }
    },
    methods: {
    
    },
  
    async created() {
      try {
      this.product=this.$store.state.product
      const resp = await axios.get(`http://172.16.20.131:8082/login-service/profile/${localStorage.getItem('userId')}`);
     
     //sort the reponse based on merchant rating
     this.profile=resp.data
     window.console.log(resp.data)
     
      } catch (e) {
        window.console.log(e);
      }
    },
    computed: {
    }
  }

</script>
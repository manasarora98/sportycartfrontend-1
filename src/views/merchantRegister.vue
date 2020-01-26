<template>
  <div>
  <div class="container">
    <div>
    <!-- <h1 style="font-family:cursive;color:#0066cc"><b>Register</b></h1> -->
    <p style="color:#0066cc"><b>Please fill in this form to create an <span style="font-size:20px;">Merchant</span> account.</b></p>
    </div>
    <hr>
     <v-form  ref="signForm" lazy-validation> 
    <labe for="name"><b>Name</b></labe><br>
    
    <v-text-field placeholder="Enter Name"  v-model="name" required></v-text-field>
    <label for="email"><b>Email</b></label>
    
    <v-text-field placeholder="Enter Email" :rules="emailRules"  v-model="email" required></v-text-field>
    <label ><b>Mobile</b></label>
    <v-text-field  placeholder="Enter Mobile Number" v-model="number" required></v-text-field>
    <label ><b>ImageUrl</b></label>
    <v-text-field  placeholder="Enter ImageUrl" v-model="imageurl" required></v-text-field>
    <label for="psw"><b>Password</b></label>
    <v-text-field  placeholder="Enter Password" :rules="passwordRules" v-model="password"   required></v-text-field>
    <label for="psw-repeat"><b>Confirm Password</b></label>
    <v-text-field  placeholder="Enter Confirm Password" :rules="passwordRules" v-model="confirmpassword"   required></v-text-field>
    </v-form>
    <button type="submit" class="registerbtn" @click="register">Register</button>
  </div>
  <!-- <div class="container signin">
    <p>Already have an account? <a href="#">Login</a>.</p>
  </div> -->
</div>
</template>
<script>
import axios from 'axios'
// import {mapGetters, mapActions} from 'vuex'
  export default {
      
    
    data: () => ({  
      name:'',
      number:'',    
    email:'',
    password:'',
    confirmpassword:'',
    imageurl:'',
    emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'password is required',
          v => v.length > 3 && v.length < 12 || 'password must be between  4-12'
        ]
    }),
  
    watch: {
      getFlag: function (newVal) {
        // window.console.log("inside watch")
        if(newVal===true) {
          window.console.log('We"re in watchers')
          this.$router.push('/') 
        } else {
          window.console.log('We"re in watchers but in negative condition')
        }
      }
    },
    methods:{
     async register(){
         if (this.$refs.signForm.validate()) {
       const resp = await axios.post(`http://172.16.20.131:8082/merchant-service/merchant/register`,{
        name:this.name,
    password:this.password,
    email:this.email,
     imgurl:this.imageurl
       })
window.console.log(resp)
         }
     }
  
  }

  }
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.container {
  padding: 1px;
  background-color: white;
  width:100%;
  height:100%;
}
input{
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #F1F1F1;
}
input:focus ,textarea:focus{
  background-color: #ddd;
  outline: none;
}
/* Overwrite default styles of hr */
hr {
  border: 1px solid #F1F1F1;
  margin-bottom: 25px;
}
/* Set a style for the submit button */
.registerbtn {
  background-color:#0066cc;
  color: white;
  padding: 16px 20px;
  margin: 2px 0;
  border: none;
  cursor: pointer;
  width: auto;
  opacity: 0.9;
  border-radius:10px;
}
.registerbtn:hover {
  opacity: 1;
}
a {
  color: dodgerblue;
}
.login {
  background-color: #F1F1F1;
  text-align: center;
}
</style>
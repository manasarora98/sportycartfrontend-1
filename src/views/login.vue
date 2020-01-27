<template>
  <div class="screen">
<div class="modal-content animate leftside">
    <!-- <h1 style="font-family:cursive; color:#0066cc"> <b>Login</b></h1> -->
    <div class="imgcontainer" style="background-color:#0066CC;height:30px;">
        <span style="color:white;font-size:20px;"> <b>Sporty Cart</b></span>
      <!-- <img src="https://i.ibb.co/BKLr1Zj/Logo2.png(30 kB)
https://i.ibb.co/BKLr1Zj/Logo9.png -->
<!-- " alt="Avatar" class="avatar"> -->
    </div>
    <!-- https://www.w3schools.com/howto/img_avatar2.png -->
<!--  -->
    <div class="container">
      <v-form  ref="loginForm" lazy-validation> 
        
      <label for="uname"><b>Email</b></label>
      <v-text-field placeholder="Enter Email" :rules="emailRules"  v-model="email" required></v-text-field>
      <!-- <input type="text" placeholder="Enter Email"  v-model="email" required> -->
      <label for="psw"><b>Password</b></label>
      <v-text-field type="password" placeholder="Enter Password" :rules="passwordRules" v-model="password"   required></v-text-field>
      <!-- <input type="password"  placeholder="Enter Password"   v-model="password"   required> -->
  
      <v-radio-group   v-model="radioGroup">
         <label for="psw"><b>User</b></label>
        <div  @click="setUser"> <v-radio   >Merchant</v-radio></div>
         <label for="psw"><b>Merchant</b></label>
       <div @click="setMerchant"><v-radio ></v-radio></div>
      </v-radio-group>
      </v-form>
  
      <button  @click="handleRoles">Login</button><br>
       <button @click="gmailLogin" v-if="roleFlag"><a href="#" class="fa fa-google"></a><strong>Continue with Google</strong></button><br><br>
      <button @click="faceBookLogin" v-if="roleFlag"><a href="#" class="fa fa-facebook"></a><strong> Continue with Facebook</strong></button><br>
    </div>
      <span> <strong>Not an user...?</strong></span>
      <p> Then Register here....</p>
    <div class="container" style="background-color:#f1f1f1">
      <button type="button" @click="signUpUser" class="register">User Register</button>
      <button type="button" @click="merchantRegister"     class="register">Seller Register</button>
    </div>
  </div>
  </div>
</template>
<script>
// import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
  export default {
      
    
    data: () => ({   
      radioGroup:1,
      role:'', 
      roleFlag:false,  
    email:'',
    password:'',
    emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'password is required',
          v => v.length > 3 && v.length < 12 || 'password must be between  8-12'
        ]
    }),
    computed:{
      ...mapGetters(['getFlag']),
    },
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
      handleRoles(){
        if(this.role=='user'){
        this.handleLogin()
        }
        else{
        this.merchantLogin()    
        window.console.log("hi i am in merchnt")
        }   
      },
      
       ...mapActions([
        'merchantlogin'
      ]),
      merchantLogin(){
         if (this.$refs.loginForm.validate()) {
             window.console.log("console")
        const payload = {
          email: this.email,
          password: this.password
        }
        this.merchantlogin({
          data: payload,
          success: this.merchantloginSuccess,
          fail: this.loginFail 
        })
         }
      },
       merchantloginSuccess (res) {
        window.console.log(res)
        localStorage.setItem('mid', res.userId)
        localStorage.setItem('accessToken', res.accessToken)
         localStorage.setItem('email', res.email)
         this.$store.commit('setFlag', false),
        
         this.$store.commit('setmerchantflag', true)
        this.$router.push('/merchantHome')
      },
      setMerchant(){
    this.role='merchant'
    this.roleFlag=false
      },
      setUser(){
      this.role='user' 
       this.roleFlag=true
      },
      ...mapActions([
        'login'
      ]),
       gmailLogin(){
          this.$store.dispatch('googleauth')
        },
         faceBookLogin(){
            this.$store.dispatch('fbAuth')           
        },
      handleLogin(){
         if (this.$refs.loginForm.validate()) {
        const payload = {
          email: this.email,
          password: this.password
        }
        this.login({
          data: payload,
          success: this.loginSuccess,
          fail: this.loginFail 
        })
         }
      },
      loginSuccess (res) {
        window.console.log(res)
        localStorage.setItem('userId', res.userId)
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('email', res.email)
     
        this.$router.push('/')
      },
      loginFail(res) { 
        //  this.$router.push('/login')       
        window.console.log(res)
      },
      signUpUser(){
        this.$router.push('/signUpUser')
      },
      merchantRegister(){
        this.$router.push('/merchantRegister')
      }

  
  }

  }
</script>
<style scoped>
/* body {font-family: Arial, Helvetica, sans-serif;} */
/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
/* Set a style for all buttons */
button {
  background-color: #0066CC;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: auto;
  height:auto;
  border-radius: 20px;
}
.fa {
    color:white;
    margin-right:10px;
    font-size: 20px;
  }
button:hover {
  opacity: 0.8;
}
/* Extra styles for the cancel button */
.register {
  width: auto;
  padding: 10px 18px;
  background-color: #F44336;
  margin-left: 10px;
}
/* Center the image and position the close button */
/* .imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
} */
img.avatar {
  width: 40%;
  border-radius: 50%;
}
.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  /* position:auto ;  */
  /* z-index: 1; */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 300px; /* Full height */
  /* overflow: auto; */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}
.modal-content {
  background-color: #FEFEFE;
  margin:15% auto;
  width: 80%;
}
/* .animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
} */
@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)}
  to {-webkit-transform: scale(1)}
}
@keyframes animatezoom {
  from {transform: scale(0)}
  to {transform: scale(1)}
}
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  
}
.leftside{
    width:500px;
}
</style>


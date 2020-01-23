<template>
  <div>
    
<div class="modal-content animate leftside">
    <!-- <h1 style="font-family:cursive; color:#0066cc"> <b>Login</b></h1> -->
    <div class="imgcontainer">
      <img src="https://i.ibb.co/BKLr1Zj/Logo2.png" alt="Avatar" class="avatar">
    </div>
    <!-- https://www.w3schools.com/howto/img_avatar2.png -->
<!--  -->
    <div class="container">
      <label for="uname"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
      <input type="radio" name="User" value="male"> User
      <input type="radio" name="Seller" value="female"> Seller<br>
      <button  type="submit">Login</button><br>
       <button><a href="#" class="fa fa-facebook"></a><strong>Continue with Facebook</strong></button><br><br>
      <button><a href="#" class="fa fa-linkedin"></a><strong> Continue with Linkedin</strong></button><br>
    
    </div>
      <span> <strong>Not an user...?</strong></span>
      <p> Then Register here....</p>
    <div class="container" style="background-color:#f1f1f1">
      <button type="button" @click="Home" class="register">User Register</button>
      <button type="button" @click="Home" class="register">Seller Register</button>
    </div>
  </div>

  

  </div>
</template>
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
  background-color: #0066cc;
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
  background-color: #f44336;
  margin-left: 10px;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

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
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}


.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; 
  width: 80%; 
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

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
  .cancelbtn {
     width: 100%;
  }
}
.leftside{
  float:left;
}

</style>
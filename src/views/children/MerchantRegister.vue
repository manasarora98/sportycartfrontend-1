<template>
  <div>
  <div class="container">
    <div>
    <!-- <h1 style="font-family:cursive;color:#0066cc"><b>Register</b></h1> -->
    <p style="color:#0066cc"><b>Please fill in this form to create an<span style="font-size:20px"> Merchant</span> account.</b></p>
    </div>
    <hr>
    <labe for="name"><b>Name</b></labe><br>
    <input type="text" placeholder="Enter Name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label ><b>Mobile</b></label>
    <input type="number" placeholder="Enter number" name="psw" required>
    
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="*******" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="*******" name="psw-repeat" required>

    <label><b>Image</b></label>
    <input type="url" placeholder="Image url" required>

    <label><b>Address</b></label>
    <textarea rows="4" cols="50" placeholder="Address here...."></textarea>
    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#">Login</a>.</p>
  </div>
</div>

</template>
<style scoped>


* {
  box-sizing: border-box;
}


.container {
  padding: 1px;
  background-color: white;
  
}
input,textarea{
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input:focus ,textarea:focus{
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
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
  background-color: #f1f1f1;
  text-align: center;
}
</style>
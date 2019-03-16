import React, { Component } from 'react';



class Buyers extends Component {

render () {

    return (

<div className="container   w-100 my-md-3 pl-md-3">


<form className="form-signin" id="formSignUp" method="POST" >
 
  <label className="sr-only" for="firstName">First Name:</label>
  <input className="form-control" type="text" name="firstName" id="txtFirstName" placeholder="FirstName"/>
  <br/>

  <label className="sr-only" for="lastName">Last Name:</label>
  <input className="form-control" type="text" name="lastName" id="txtLastName" placeholder="LastName"/>
  <br/>

 <label className="sr-only" for="email">Email:</label>
  <input className="form-control"  type="email" name="email" id="txtEmail" placeholder="Email"/>
  <br/>

  <label for="password" class="sr-only">Password:</label>
  <input type="password" name="password" id="txtPassword" class="form-control" placeholder="Password"/>
  <br/>

  <button className="btn b btn-secondary btn-block" type="submit">Sign Up</button>

<a> By creating an account, you agree to out Agreement and Privacy Policy.</a>
<a> Already have an account? Log In</a>



</form>




 </div>
    )
}



}


export default Buyers;

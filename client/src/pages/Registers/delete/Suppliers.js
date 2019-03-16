import React, { Component } from 'react';



class Suppliers extends Component {

render () {

    return (

<div className="container w-100 my-md-3 pl-md-3">
<br/>

<div className="py-5 text-center">
    <h2>Register your Company</h2>
    <p className="lead">Fill all the information below.</p>
  </div>
<br/>
  <div className="col order-md-1">


      <h4 className="mb-3">Create account</h4>
      <form className="needs-validation">
        <div className="row">
          <div className="col-md-4 mb-3">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" placeholder=""></input>
        
          </div>
          <div className="col-md-4 mb-3">
            <label for="password">Password</label>
            <input type="text" class="form-control" id="password" placeholder=""></input>
          
          </div>

          <div className="col-md-4 mb-3">
            <label for="confirmpassword">Confirm Password</label>
            <input type="text" class="form-control" id="confirmpassword" placeholder="" ></input>
          
          </div>
        </div>
</form>

        </div>

        <div className="col order-md-1">
        <br/>

      <h4 className="mb-3">Company Information</h4>
      <form className="needs-validation">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label for="namecompany">Name Company</label>
            <input type="text" class="form-control" id="namecompany" placeholder="" ></input>
        
          </div>
          <div className="col-md-6 mb-3">
            <label for="companysector">Company Sector</label>
            <input type="text" class="form-control" id="companysector" placeholder=""></input>
          
          </div>

         
        </div>
</form>

        </div>

        <div className="col order-md-1">
        <br/>

      <h4 className="mb-3">Address Information</h4>
      <form className="needs-validation">
        <div className="row">
          <div className="col-md-3 mb-3">
            <label for="Address 1">Address 1</label>
            <input type="text" class="form-control" id="address1" placeholder=""></input>
        
          </div>
          <div className="col-md-3 mb-3">
            <label for="Address2">Address 2</label>
            <input type="text" class="form-control" id="address2" placeholder="" ></input>
          
          </div>

          <div className="col-md-3 mb-3">
            <label for="Country">Country</label>
            <input type="text" class="form-control" id="country" placeholder=""></input>
          
          </div>


          <div className="col-md-3 mb-3">
            <label for="State">State</label>
            <input type="text" class="form-control" id="state" placeholder="" ></input>
          
          </div>
         
        </div>
</form>

        </div>

       <br/>

        <button clasName="btn btn-outline-success btn-lg btn-block" type="submit">Continue to checkout</button>


        </div>





    )
}



}


export default Suppliers;

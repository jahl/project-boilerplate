import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Supplier extends Component {

render () {

    return (

<div>
        


<div className=" col-12   d-md-flex flex-md-equal h-100 w-100 ">
  <div className="col-md-6 p-lg-5 text-center bg-dark">
    <h1 className="display-2 font-weight-bolder p-5 text-warning">Suppliers</h1>
   
  

  </div>


  <div className="col-md-6 p-lg-5 text-center bg-light">
    <h4 className="display-4 font-weight-bolder p-2 text-dark">Get ready</h4>
    <p className="lead font-weight-normal text-justify text-dark"> 
Reaching your audience is easier than you thought, using our tools, you'll get the business made anytime, anywhere. 

It allows you to manage all in one place.
</p>
  

<div className="row">
      <div className="col-6 p-5">
     <button type="button" className="btn btn-outline-warning my-4  p-5 btn-lg btn-block">Login</button>
     <br/>
 </div>


<div className="col-6 p-5">
<button type="button" className="btn btn-outline-dark my-4  p-5 btn-lg btn-block">Register</button>
<br/>
</div>
   </div>




  </div>



</div>






  <div className="col-md-6 ">
 
  </div> 
  </div>






    )
}



}


export default Supplier;

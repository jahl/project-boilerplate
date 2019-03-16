import React, { Component } from 'react';
import { Link } from "react-router-dom";



class Register extends Component {

render () {

    return (







<div className="row">


<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>


<div className="card-group flex-md-equal w-100 mh-100 inner cover" >

  <div className="card bg-dark pt-5 px-5 pt-md-5  text-center text-white col-lg-6">
    <div className="my-5 py-5">
      <label className="btn btn-outline-danger btn-lg">
    <h2  className="display-5" type="radio" name="options" id="option1" checked> As Buyer</h2>
  </label>
      <br/>
    </div>
  </div>
  <br/>
  <div className="card bg-danger pt-5 px-5 pt-md-5 text-center text-black col-lg-6">
    <div className="my-5 p-5">
   
      <label className="btn btn-outline-dark btn-lg">
    <h2  className="display-5" type="radio" name="options" id="option1" checked> As Suppliers</h2>
  </label>

      <br/>
    </div>
  </div>
</div>



</div>
    )
}



}


export default Register;

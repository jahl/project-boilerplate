import React, { Component } from 'react';
import { Link } from "react-router-dom";



class GroupButton extends Component {

    render() {

        return (





<div className="btn-group my-4" role="group">

 
  
  <button type="button" className="btn btn-outline-dark"> <Link className="text-dark" to="/login">Login </Link></button>




<button type="button" className="btn btn-outline-dark"><Link  className="text-dark" to="/register">Register</Link></button>



</div>
     
 

)
}



}



export default GroupButton;
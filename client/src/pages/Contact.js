import React, { Component } from 'react';



class Contact extends Component {

render () {

    return (


<div>



<div className="row">
                <div className="col-md-12 mb-4">
                    <div>
                        <div className="card-body">
                            <form>
                                <h1 className="text-center py-4 font-bold font-up">  Contact us</h1>
                                <div className="md-form">
                                    <i className="fa fa-user prefix grey-text "></i>
                                    <label for="name">   Name </label>
                                    <input type="text" id="name" className="form-control"/>
                                   
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-envelope prefix grey-text"></i>
                                    <label for="form21">Email</label>
                                    <input type="text" id="form21" className="form-control"/>
                                    
                                </div>
                                <div className="md-form">
                                    <i className="fa fa-tag prefix grey-text"></i>
                                    <label for="form341">Subject</label>
                                    <input type="text" id="form321" className="form-control"/>
                                   
                                </div>
                                <div className="lg-form">
                                    <i className="fa fa-pencil prefix grey-text"></i>
                                   
                                    <textarea type="text" id="message" class="form-control"rows="4" placeholder="Message"></textarea>
                                  
                                </div>
                                <br/>
                                <div className="text-center">
                                    <button className="btn btn-outline-success btn-lg btn-block" >Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
</div>


</div>
    )
}



}


export default Contact;

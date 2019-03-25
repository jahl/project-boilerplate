import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import ProductForm from "./../../pages/ProductForm";

class Modal extends Component {

    render() {

        return (

            <>


                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="my-5 modal-title text-dark text-center display-4 font-weight-bold" id="ModalCenterTitle" >Create New Product</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <ProductForm />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>


            </>



        )
    }
}


export default Modal;
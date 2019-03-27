import React, { Component } from 'react';
import "./style.css";
import GroupButton from "../Gbtn";
import Nav from "./../Nav";


class All extends Component {

    render() {

        return (
            <>
                <Nav />
                <main>
                    <div className="grid" >

                        <div id="about" className="grid__item bg-light">
                            <div className="grid__item-content text-warning">

                                <h1 className="display-1 font-weight-bold ">Get Ready</h1>
                                <h3 className="display-3 font-weight-bolder ">with Houdini</h3>


                            </div>
                        </div>

                        <div className="grid__item bg-light">

                            <div className="grid__item-content text-dark">
                                <small>Anyday, Anywhere</small>

                                <h1 className="display-4 font-weight-bold"> Make your Bussiness Possible</h1>
                                <p className="lead font-weight-normal text-justify"> We have the necessary tools that help reach a global audience about the product.</p>

                                <button type="button" className="btn w-80 btn-outline-dark">Contact</button>


                            </div>
                        </div>


                        <div className="grid__item bg-light ">
                            <div className="grid__item-content">

                                <small>First Steps</small>

                                <h1 className="display-4 font-weight-bold"> Make It Possible</h1>
                                <p className="lead font-weight-normal text-justify"> We have the necessary tools that help reach a global audience about the product.</p>
                                <GroupButton></GroupButton>

                            </div>
                        </div>

                        <div id="buyers" className="grid__item bg-warning" >


                            <div className="grid__item-content text-dark">
                                <span className="grid__item-meta">You wanna buy products to start your bussiness?</span>
                                <h1 className="display-1 font-weight-bolder text-dark "> Buyers</h1>

                            </div>
                        </div>



                        <div id="suppliers" className="grid__item bg-dark">

                            <div className="grid__item-content " >
                                <small className="text-light" > Are you interested in reach a global audience?</small>
                                <h1 className="display-1 font-weight-bolder text-warning "> Suppliers</h1>




                            </div>
                        </div>

                        <div className="grid__item bg-light">
                            <div className="grid__item-content">



                                <small>All your bussiness in one place</small>

                                <h1 className="display-4 font-weight-bold"> Get Connected</h1>
                                <p className="lead font-weight-normal text-justify"> We have the necessary tools that help reach a global audience about the product.</p>
                                <GroupButton></GroupButton>
                            </div>




                        </div>









                    </div>
                </main>
            </>

        )
    }



}



export default All;
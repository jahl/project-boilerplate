import React, { Component } from 'react';
import NavDashboard from "./../../components/NavDash"
import ProductDashboard from "./../ProductDashboard";




class Dashboard extends Component {

    render() {

        return (



            <>


                <NavDashboard />

                <div className="container-fluid ">

                    <div className="row">
                        <main className="p-5 mr-5 col-md-9 col-lg-10 ">

                            <ProductDashboard />
                        </main>
                    </div>
                </div>



            </>



        )
    }



}


export default Dashboard;

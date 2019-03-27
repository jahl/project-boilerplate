import React, { Component } from 'react';
import NavDashboard from "./../../components/NavDash"

class Dashboard extends Component {

    render() {

        return (



            <>
                <NavDashboard />


                <div className="container p-5 mt-1 mr-1 col-md-9 col-lg-10 ">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Clients</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>10 users included</li>
                                    <li>2 GB of storage</li>
                                    <li>Email support</li>
                                    <li>Help center access</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Orders</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>20 users included</li>
                                    <li>10 GB of storage</li>
                                    <li>Priority email support</li>
                                    <li>Help center access</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                            <div className="card-header">
                                <h4 className="my-0 font-weight-normal">Top Sale</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>30 users included</li>
                                    <li>15 GB of storage</li>
                                    <li>Phone and email support</li>
                                    <li>Help center access</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>



        )
    }



}


export default Dashboard;

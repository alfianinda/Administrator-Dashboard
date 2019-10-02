import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/gayaku.css';
import Header from './Header';
import Footer from './Footer';

class Invoice extends Component 
{
    render() 
    { 
        return ( 
        <div>
		<Header/>

            {/* bikin invoice */}
            <div className="container">
                <div className="row">
                <div className="col-xs-12">
                    <div className="invoice-title">
                    <h2>Invoice</h2><h3 className="pull-right">Order # 100001</h3>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-xs-6">
                        <address>
                        <strong>Billed To:</strong><br />
                        Ganis Ezra Saputra<br />
                        Jl. Jawa 57<br />
                        Jember<br />
                        JATIM, 68121
                        </address>
                    </div>
                    <div className="col-xs-6 text-right">
                        <address>
                        <strong>Shipped To:</strong><br />
                        Ganis Ezra Saputra<br />
                        Jl. Jawa 57<br />
                        Jember<br />
                        JATIM, 68121
                        </address>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-xs-6">
                        <address>
                        <strong>Payment Method:</strong><br />
                        Visa ending **** 1234<br />
                        ganis@email.com
                        </address>
                    </div>
                    <div className="col-xs-6 text-right">
                        <address>
                        <strong>Order Date:</strong><br />
                        30th May 2018<br /><br />
                        </address>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title"><strong>Order summary</strong></h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                        <table className="table table-condensed">
                            <thead>
                            <tr>
                                <td><strong>Item</strong></td>
                                <td className="text-center"><strong>Price</strong></td>
                                <td className="text-center"><strong>Quantity</strong></td>
                                <td className="text-right"><strong>Totals</strong></td>
                            </tr>
                            </thead>
                            <tbody>
                            {/* foreach (Rp order->lineItems as Rp line) or some such thing here */}
                            <tr>
                                <td>C-0002</td>
                                <td className="text-center">Rp 200.0000</td>
                                <td className="text-center">2</td>
                                <td className="text-right">Rp 400.000</td>
                            </tr>
                            <tr>
                                <td>C-0003</td>
                                <td className="text-center">Rp 150.000</td>
                                <td className="text-center">3</td>
                                <td className="text-right">Rp 450.000</td>
                            </tr>
                            <tr>
                                <td className="thick-line" />
                                <td className="thick-line" />
                                <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                <td className="thick-line text-right">Rp 850.000</td>
                            </tr>
                            <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Shipping</strong></td>
                                <td className="no-line text-right">Rp 50.000</td>
                            </tr>
                            <tr>
                                <td className="no-line" />
                                <td className="no-line" />
                                <td className="no-line text-center"><strong>Total</strong></td>
                                <td className="no-line text-right">Rp 900.000</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
		
        <Footer/>
        </div>
        );
    }
} 

export default Invoice;
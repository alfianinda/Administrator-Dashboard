import React, { Component } from 'react';
import './../style/gayaku.css';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Admin extends Component 
{
    render() 
    {
      //Cookies login
      if (cookies.get('adminID') === undefined)
      {
          return <Redirect to='/'/>
      }
      //akhir cookies login

        return ( 
        <div>
        <Header/>

        {/* halaman admin */}
        <section id="main">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="list-group">
                  {/* <a href="index.html" class="list-group-item active main-color-bg"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          Dashboard <span class="badge">12</span>
        </a> */}
                  <a href="./History" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> History Invoices{/*<span class="badge">25</span>*/}</a>
                  <a href="./Postproducts" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> Products</a>
                  <a href="./Customers" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true" /> Customers</a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="panel panel-default">
                  <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Website Overview</h3>
                  </div>
                  <div className="panel-body">
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-user" aria-hidden="true" /> 24529</h2>
                        <h4>Customers</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> 67</h2>
                        <h4>Articles</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true" />126</h2>
                        <h4>Products</h4>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="well dash-box">
                        <h2><span className="glyphicon glyphicon-stats" aria-hidden="true" /> 345345</h2>
                        <h4>Visitores</h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Latest User*/}
                <div className="panel panel-default">
                  <div className="panel-heading" style={{backgroundColor: 'rgb(110, 7, 12)', color: 'white'}}>
                    <h3 className="panel-title">Latest Users</h3>
                  </div>
                  <div className="panel-body">
                    <table className="table table-striped table-hover">
                      <tbody><tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Joined</th>
                        </tr>
                        <tr>
                          <td>Ganis Ezra Saputra</td>
                          <td>ganis@gmail.com</td>
                          <td>30 May 2018</td>
                        </tr>
                        <tr>
                          <td>Laura</td>
                          <td>laura@gmail.com</td>
                          <td>30 May 2018</td>
                        </tr>
                        <tr>
                          <td>Emma Watson</td>
                          <td>watson@yahoo.com</td>
                          <td>30 May 2018</td>
                        </tr>
                        <tr>
                          <td>Lily J. Collins</td>
                          <td>collins@outlook.com</td>
                          <td>30 May 2018</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer/>
        </div>
        );
    }
} 

export default Admin;
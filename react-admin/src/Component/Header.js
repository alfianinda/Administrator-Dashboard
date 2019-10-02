import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../style/gayaku.css';

class Header extends Component 
{
    render() 
    { 
        return ( 
        <div>
            
            {/* bikin navbar */}
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    </button>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                    <li><a href="./Admin">Welcome, Nur Inna Alfianinda</a></li>         
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    {/* <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href=" ">Create Content
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href=" ">Add Products</a></li>
                        <li><a href=" ">Add News</a></li>
                        <li><a href=" ">Delete Products</a></li> 
                    </ul>
                </li> */}
                    <li><Link to="/Logout">Logout</Link></li>          
                    </ul>
                </div> 
                </div>
            </nav>

            <header id="header" style={{marginTop: '-40px'}}>
                <div className="container">
                    <div className="row">
                    <div className="col-md-10">
                        <h1><span className="glyphicon glyphicon-cog" aria-hidden="true" /> Dashboard <small>Manage This Site</small></h1>
                    </div>
                    </div>
                </div>
            </header>
        <br />
        
        </div>
        );
    }
} 

export default Header;
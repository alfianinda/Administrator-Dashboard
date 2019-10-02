import React, { Component } from 'react';
import './../style/gayaku.css';

class Footer extends Component 
{
    render() 
    { 
        return ( 
        <div>
            {/* bikin footer */}
            <footer className="container-fluid text-center">
                <p>All Right Reserved / Design by <a href="ni.alfianinda@gmail.com" title="alfianinda">ni.alfianinda</a></p> 
            </footer>
        </div>
        );
    }
} 

export default Footer;
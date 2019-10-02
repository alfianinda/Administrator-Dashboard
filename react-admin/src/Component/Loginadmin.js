import React, { Component } from 'react'; 
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './../style/gayaku.css';
// import Header from './Header';
import Footer from './Footer';

const cookies = new Cookies();

class Loginadmin extends Component {
  state = {
      statusRedirect: false
  }
 
  fungsiLogin = (e) => {         
    var email = e.email.value;
    var password = e.password.value;
    axios.post('http://localhost:5000/loginadmin', {
      email: email,
      password: password
  }).then((response)=> {
        var adminID = response.data;
        // console.log(response.data);
        cookies.set('adminID', adminID, {path: '/'});
        this.setState({
            statusRedirect: true
        });
      });   
  }

    render() { 
      
      if (this.state.statusRedirect) return <Redirect to="/Admin"/>

        return ( 
        <div>
		    {/* <Header/> */}

          {/* bikin login */}
          <div className="container">
            <h1><b>Login Form for Admin</b></h1>
            <hr />
            <form role="form">
              <div className="col-sm-3" />
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Email:</label>
                  <input ref="email" type="email" placeholder="Enter Your Email Address" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input ref="password" type="password" placeholder="Enter Your Password" className="form-control" required />
                </div>


                {/* <label><input type="checkbox" defaultChecked="checked" name="remember" /> Remember me</label> */}
                <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btncart">Login</button>
                {/* Forgot <a href=" ">password?</a> */}
              </div>   
            </form>
          </div>
	  
        <div class="navbar-fixed-bottom">
        <Footer/>
        </div>
        </div>
        );
    }
} 

export default Loginadmin;



import React, { Component } from 'react'
import $ from 'jquery';

class LoginForm extends Component {

  componentDidMount() {
    $("#Signup_form").on('submit', function(e){
      e.preventDefault();
    })
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <form method="post" name="Login_Form" id="Login_Form" className="form-signin">       
              <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
              <hr className="colorgraph" /><br />
              <input type="text" className="form-control" name="Username" placeholder="Username" required=""/>
              <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>     		  
              <br />
              <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>  			
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm

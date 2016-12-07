import React, { Component } from 'react'
import $ from 'jquery';

class SignUpForm extends Component {

  componentDidMount() {
    $("#Signup_form").on('submit', function(e){
      e.preventDefault();
    })
  }

  render() {
    return(
      <div className="container">
        <div className="wrapper">
          <form method="post" name="Signup_Form" id="Signup_form" className="form-signin">
              <h3 className="form-signin-heading">Sign Up</h3>
              <input type="text" className="form-control" name="Username" placeholder="Username" required=""/>
              <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>     		  
              <input type="password" className="form-control" name="PasswordConformation" placeholder="Password Confirmation" required=""/>     		  
              <input type="text" className="form-control" name="age" placeholder="Age" required=""/>     		  
              <br />
              <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="SignUp" type="Submit">Sign Up</button>  			
          </form>			
        </div>
      </div>
    )
  }
}

export default SignUpForm

import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


//This is the default Container component
import Container from "./components/Container.js"
//All pages will be grouped here
import HomePage from  "./pages/Home.js"
import LoginPage from  "./pages/Login.js"
import SignupPage from  "./pages/Signup.js"

//These are the error pages
import NotFoundPage from "./pages/404.js"

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/login' component={LoginPage} />
        </Route>

        {/* This will not come under the layout */}
        <Route path='*' component={NotFoundPage} />
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import $ from 'jquery';

import BlogFilter from "../components/BlogFilter.js"
import BlogCategories from "../components/BlogCategories.js"
//import BlogContentHeader from "../components/BlogContentHeader.js"
import BlogSnippet from "../components/BlogSnippet.js"

class Home extends Component {
  //Every component has and maintaines it's own state.
  constructor() {
    super();
    //Here we are setting the state to be an object that has posts array.
    //Don't know if this is the best way or to maintain one global state
    //Could not find documentation.
    this.state = {
      posts: []
    }
  }

  //On Mounting of a component we fire the ajax query
  //To get data.
  componentDidMount() {
    //This convoluted binding is needed other wise we wont have access to `this` and thus no access to 
    //the Components state or its props
    this.BlogRequest = $.getJSON("/blog_posts.json", function(data) {
      this.setState({posts: data});
    }.bind(this));
  }

  render() {
    var Blog= function(blog,i) {
      //TODO change props to just take the object as is and then render based on that.
      return(<BlogSnippet key={i} author={blog.author} created_at={blog.created_at} title={blog.title} categories={blog.categories} />)
    }
    return (
      <div className='row'>
        {/*This is the left filters*/}
        <div className='col-md-4'>
          <BlogFilter />

          <BlogCategories />
        </div>
        {/*This is the main content*/}
        <div className='col-md-8' id='blog_posts'>
          {/*<BlogContentHeader /> */}
          //We loop through the entire posts which is in the state and render each one.
          <ul>{this.state.posts.map(Blog)}</ul>
        </div>
      </div>
    )
  }
}

export default Home

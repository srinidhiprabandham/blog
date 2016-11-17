import React, { Component } from 'react';

import BlogFilter from "../components/BlogFilter.js"
import BlogCategories from "../components/BlogCategories.js"
import BlogContentHeader from "../components/BlogContentHeader.js"
import BlogSnippet from "../components/BlogSnippet.js"

class Home extends Component {
  render() {
    return (
      <div className='row'>
        {/*This is the left filters*/}
        <div className='col-md-4'>
          <BlogFilter />

          <BlogCategories />
        </div>
        {/*This is the main content*/}
        <div className='col-md-8'>
          {/*<BlogContentHeader /> */}
          {/* Now query the backend and get all blogs saved*/}
          <BlogSnippet author={'Prabandham Srinidhi'} created_at={'11/11/2016'} title={'Intro to ReactJS'} categories={["Programing","Javascript","Single Page Application","Facebook"]}/>
          <BlogSnippet author={'Ashwin J'} created_at={'16/11/2016'} title={'Navsion the complete ERP'} categories={["Programing","ERP", "Microsoft"]}/>
          <BlogSnippet author={'Rashmi Jain'} created_at='10/09/2016' title={'A trek to remember'} categories={["Travel","Outdoor","Nature","Serene"]}/>
        </div>
      </div>
    )
  }
}

export default Home

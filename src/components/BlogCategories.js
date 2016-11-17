import React, { Component } from 'react'

class BlogCategories extends Component {
  render(){
    return(
      <div className="well">
        <h4>Trending Categories</h4>
        <hr className='color-black'/>
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-unstyled">
              <li><a href="#">Sports / Gaming</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Travel / Outdoor Activities</a></li>
              <li><a href="#">Movies / Entertainment</a></li>
              <li><a href="#">Programing</a></li>
              <li><a href="#">Martial Arts</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogCategories

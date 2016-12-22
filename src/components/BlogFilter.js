import React, { Component } from 'react'

class BlogFilter extends Component {
  render() {
    return(
      <div className="well">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search Blogs"/>
          <span className="input-group-btn">
            <button className="btn btn-lg" type="button">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default BlogFilter

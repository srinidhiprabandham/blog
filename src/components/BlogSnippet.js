import React, { Component, PropTypes } from 'react'

class BlogSnippet extends Component {
  render() {
    return(
      <div className="row">
        <h2><a href="#">{this.props.title}</a></h2>
        <p className="lead">
          <small>by <a href="#">{this.props.author}</a></small>
          <span className="pull-right">
            <small>on - {this.props.created_at}</small>
          </span>
        </p>
        <hr />
        <img className="img-responsive" src="http://placehold.it/900x300" alt="" />
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
      </div>
    )
  }
}

BlogSnippet.propTypes = {
  author: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}

export default BlogSnippet

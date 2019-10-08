import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropsTypes from "prop-types";
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div className="post-item" key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <React.Fragment>
        <div>{postItems}</div>
      </React.Fragment>
    );
  }
}

// this is where I get the posts in this component  from the root store / state
const mapStateToProps = state => ({
  posts: state.posts.items
});

Posts.PropsTypes = {
  fetchPost: PropsTypes.func.isRequired,
  posts: PropsTypes.array.isRequired
};

// need to connect the map , action and Component in export
export default connect(
  mapStateToProps, // map
  { fetchPosts } // actions
)(Posts); // component

import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          posts: data
        });
      });
  }

  render() {
    // const postItems = this.state.posts.map(post => {
    //   <div key={post.id}>
    //     <h4>{post.title}</h4>
    //     <p>{post.body}</p>
    //   </div>;
    // });

    const postItems = this.state.posts.map(post => (
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import PropsTypes from "prop-types";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //send the data :

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log("Works", data));
  }
  render() {
    return (
      <React.Fragment>
        Posts Forms
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Title: </label>
            <input
              onChange={this.onChange}
              type="text"
              name="title"
              value={this.state.title}
            ></input>
          </div>
          <br></br>
          <div>
            <label>Body: </label>
            <textarea
              onChange={this.onChange}
              value={this.state.body}
              name="body"
              type="textarea"
            ></textarea>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

Postform.PropsTypes = {
  createPost: PropsTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});
export default connect(
  null,
  { createPost }
)(Postform);

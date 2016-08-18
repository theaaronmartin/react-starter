import React from 'react';
import $ from 'jquery';

import CommentBox from './CommentBox.jsx';
import config from './config.jsx';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
    this.getPost = this.getPost.bind(this);
  }

  getPost() {
    $.ajax({
      url: config.url + '/posts/' + this.props.params.id,
      dataType: 'json',
      cache: false
    })
    .done(function(post) {
      post.username = post.user.username;
      this.setState({ data: post });
      console.log(this.state.data);
    }.bind(this))
    .fail(function(xhr, status, err) {
      console.error(err);
    }.bind(this));
  }

  componentDidMount() {
    this.getPost();
  }

  render() {
    return (
      <div className="post">
        <h2 className="post-title">
          {this.state.data.title}
        </h2>
        <h2 className="post-user">
          <span className="author">Written By:</span> {this.state.data.username}
        </h2>
        <h2 className="post-body">
          {this.state.data.body}
        </h2>
        <br />
        <br />
         <CommentBox id={this.state.data._id}/>
        {this.props.children}
      </div>
    );
  }
}

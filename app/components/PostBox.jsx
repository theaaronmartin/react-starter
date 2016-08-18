import React from 'react';
import $ from 'jquery';

import config from './config.jsx';

import PostList from './PostList.jsx';

export default class PostBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
    this.getPosts = this.getPosts.bind(this);
  }

  getPosts() {
    $.ajax({
      url: config.url + '/posts',
      dataType: 'json',
      cache: false
    })
    .done(function(posts) {
      this.setState({ data: posts });
    }.bind(this))
    .fail(function(xhr, status, err) {
      console.error(err);
    }.bind(this));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="post-box">
        <h1 className="post-title">Posts</h1>
        <PostList data={this.state.data} />
      </div>
    );
  }
}

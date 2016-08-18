import React from 'react';
import { Link } from 'react-router';

import Post from './Post.jsx';

export default class PostList extends React.Component {
  render() {
    var postNodes = this.props.data.map(function(post) {
      return (
        <Post title={post.title} user={post.user.username} key={post._id}>
          <Link to={"/posts/" + post._id}>View Post</Link>
        </Post>
      );
    });
    return (
      <div className="post-list">
        {postNodes}
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';

import PostListItem from './PostListItem.jsx';

export default class PostList extends React.Component {
  render() {
    var postItemNodes = this.props.data.map(function(post) {
      return (
        <PostListItem title={post.title} user={post.user.username} key={post._id}>
          <Link to={"/posts/" + post._id}>View Post</Link>
        </PostListItem>
      );
    });
    return (
      <div className="post-list">
        {postItemNodes}
      </div>
    );
  }
}

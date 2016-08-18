import React from 'react';

import Post from './Post.jsx';

export default class PostList extends React.Component {
  render() {
    var postNodes = this.props.data.map(function(post) {
      return (
        <Post user={post.user.username} title={post.title} key={post._id}>
          {post.body}
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

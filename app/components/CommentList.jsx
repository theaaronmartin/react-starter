import React from 'react';

import Comment from './Comment.jsx';

export default class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment user={comment.user} key={comment._id}>
          {comment.body}
        </Comment>
      );
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
}

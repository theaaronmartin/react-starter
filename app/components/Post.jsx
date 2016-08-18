import React from 'react';

import CommentBox from './CommentBox.jsx';

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <h2 className="post-title">
          {this.props.title}
        </h2>
        <h2 className="post-user">
          <span className="author">By:</span> {this.props.user}
        </h2>
        <h2 className="post-body">
          {this.props.body}
        </h2>
         {/*<CommentBox data={this.state.data} />*/}
        {this.props.children}
      </div>
    );
  }
}

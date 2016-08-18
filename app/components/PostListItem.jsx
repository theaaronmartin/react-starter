import React from 'react';

import config from './config.jsx';

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
        {this.props.children}
      </div>
    );
  }
}

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Node Blogger</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Node Blogger</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul role="nav" className="nav navbar-nav">
                <li><IndexLink to="/home" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/posts">Posts</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        { this.props.children }
      </div>
    );
  }
}

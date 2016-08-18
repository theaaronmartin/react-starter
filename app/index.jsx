import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import $ from 'jquery';
import routes from './components/routes.jsx';

// import PostBox from './components/PostBox.jsx';

ReactDOM.render(
  <Router routes={routes} history={browserHistory} pollInterval={1500} />,
  document.getElementById('app')
);

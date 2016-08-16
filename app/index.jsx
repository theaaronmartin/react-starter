import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import CommentBox from './components/CommentBox.jsx';

ReactDOM.render(
  <CommentBox url="http://localhost:3000/posts/57ae4dc5b0b8fc293187c129" pollInterval={1500} />,
  document.getElementById('content')
);

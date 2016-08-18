import React from 'react';
import { Route } from 'react-router';
import App from './App.jsx';
import Comment from './Comment.jsx';
import CommentBox from './CommentBox.jsx';
import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';
import Post from './Post.jsx';
import PostBox from './PostBox.jsx';
import PostList from './PostList.jsx';
import Home from './Home.jsx';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/home" component={Home}></Route>
    <Route path="/posts" component={PostBox}>
      <Route path="/posts/:id" component={Post}></Route>
    </Route>
  </Route>
);

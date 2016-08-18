import React from 'react';
import $ from 'jquery';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import config from './config.jsx';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: { comments: [] } };
    this.getComments = this.getComments.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  getComments() {
    $.ajax({
      url: config.url + '/posts/' + this.props.params.id,
      dataType: 'json',
      cache: false
    })
    .done(function(post) {
      this.setState({ data: post });
    }.bind(this))
    .fail(function(xhr, status, err) {
      console.error(err);
    }.bind(this));
    console.log(this.props);
  }

  handleCommentSubmit(comment) {
    $.ajax({
        url: config.url + '/posts/' + this.props.params.id + '/comments/',
        dataType: 'json',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(comment)
      })
      .done(function(post) {
        this.setState({data: post});
      }.bind(this))
      .fail(function(xhr, status, err) {
        console.error(err);
      }.bind(this));
  }

  componentDidMount() {
      this.getComments();
      console.log(this.props);
      // setInterval(this.getComments, this.props.pollInterval);
    }

  render() {
    return (
      <div className="comment-box">
        <h3 className="cb-title">Comments</h3>
        <CommentList data={this.state.data.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

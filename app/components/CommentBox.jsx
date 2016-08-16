import React from 'react';
import $ from 'jquery';

import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: { comments: [] } };
    this.getComments = this.getComments.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
}

getComments() {
  $.ajax({
    url: this.props.url,
    dataType: 'json',
    cache: false
  })
  .done(function(post) {
    this.setState({ data: post });
  }.bind(this))
  .fail(function(xhr, status, err) {
    console.error(err);
  }.bind(this));
}

handleCommentSubmit(comment) {
  $.ajax({
      url: this.props.url + '/comments/',
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
    // setInterval(this.getComments, this.props.pollInterval);
  }

  render() {
    return (
      <div className="comment-box">
        <h1 className="cb-title">C<span>omment</span>s</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

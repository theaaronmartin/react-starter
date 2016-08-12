class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <h2 className="comment-user">
          {this.props.user.username}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    var commentNodes = this.props.data.comments.map(function(comment) {
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

class CommentForm extends React.Component {
  render() {
    return (
      <div className="comment-form">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: { comments: [] } };
    this.getComments = this.getComments.bind(this);
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

componentDidMount() {
    this.getComments();
    setInterval(this.getComments, this.props.pollInterval);
  }

  render() {
    return (
      <div className="comment-box">
        <h1 className="cb-title">C<span>omment</span>s</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
};

ReactDOM.render(
  <CommentBox url="http://localhost:3000/posts/57ae4dc5b0b8fc293187c129" pollInterval={1500} />,
  document.getElementById('content')
);

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
  constructor(props) {
    super(props);

    this.state = { user: { username: '' }, body: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleUsernameChange(e) {
      this.setState({ user: { username: e.target.value } });
    }

    handleBodyChange(e) {
      this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
      e.preventDefault();

      var username = this.state.user.username.trim();
      var body = this.state.body.trim();

      if (!username || !body) {
        return;
      }

      this.props.onCommentSubmit({
        user: {
          username: username
        },
        body: body
      });

      this.setState({ user: { username: '' }, body: '' });
    }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input
            className="text-box"
            type="text"
            placeholder="Your username"
            value={this.state.user.username}
            onChange={this.handleUsernameChange}
        />
        <input
            className="text-box"
            type="text"
            placeholder="Say something..."
            value={this.state.body}
            onChange={this.handleBodyChange}
        />
          <input type="submit" value="Post" />
      </form>
    );
  }
}

class CommentBox extends React.Component {
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
};

ReactDOM.render(
  <CommentBox url="http://localhost:3000/posts/57ae4dc5b0b8fc293187c129" pollInterval={1500} />,
  document.getElementById('content')
);

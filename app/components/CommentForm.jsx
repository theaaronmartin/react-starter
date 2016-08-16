import React from 'react';

export default class CommentForm extends React.Component {
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

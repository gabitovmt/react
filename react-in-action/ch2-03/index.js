'use strict';

class Post extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'post'},
      React.createElement(
        'h2',
        {id: this.props.id, className: 'postAuthor'},
        this.props.user,
        React.createElement(
          'span',
          {className: 'postBody'},
          this.props.content
        )
      ),
      this.props.children
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

class Comment extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'comment'},
      React.createElement(
        'h2',
        {'className': 'commentAuthor'},
        this.props.user,
        React.createElement(
          'span',
          {className: 'commentContent'},
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      content: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState(() => ({
      user: event.target.value
    }));
  }

  handleTextChange(event) {
    this.setState(() => ({
      content: event.target.value
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState(() => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return React.createElement(
      'form',
      {className: 'createComment', onSubmit: this.handleSubmit},
      React.createElement(
        'input',
        {
          type: 'text',
          placeholder: 'Your name',
          value: this.state.user,
          onChange: this.handleUserChange
        }
      ),
      React.createElement(
        'input',
        {
          type: 'text',
          placeholder: 'Thoughts?',
          value: this.state.content,
          onChange: this.handleTextChange
        }
      ),
      React.createElement(
        'input',
        {
          type: 'submit',
          value: 'Post'
        }
      )
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    // Мы не изменяем состояние непосредственно
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  }

  render() {
    return React.createElement(
      'div',
      {className: 'commentBox'},
      React.createElement(
        Post,
        {
          id: this.props.post.id,
          user: this.props.post.user,
          content: this.props.post.content
        }
      ),
      this.state.comments.map(function (comment) {
        return React.createElement(
          Comment,
          {
            key: comment.id,
            id: comment.id,
            user: comment.user,
            content: comment.content
          }
        );
      }),
      React.createElement(
        CreateComment,
        {
          onCommentSubmit: this.handleCommentSubmit
        }
      )
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

const data = {
  post: {
    id: 123,
    user: 'Mark Thomas',
    content: 'What we hope ever to do with ease, we must first learn to do with diligence. - Samuel Johnson'
  },
  comments: [
    {
      id: 0,
      user: 'David',
      content: 'such. win.'
    }, {
      id: 1,
      user: 'Haley',
      content: 'Love it.'
    }, {
      id: 2,
      user: 'Peter',
      content: 'Who was Samuel Johnson?'
    }, {
      id: 3,
      user: 'Mitchell',
      content: '@Peter get off Letters and do your homework'
    }, {
      id: 4,
      user: 'Peter',
      content: '@mitchell ok :P'
    }
  ]
}

const node = document.getElementById('root');
ReactDOM.render(React.createElement(
  CommentBox,
  {
    post: data.post,
    comments: data.comments
  }
), node);

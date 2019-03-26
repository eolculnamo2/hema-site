/* eslint-disable no-restricted-globals */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';

class ArticleComments extends React.Component {
  static buttonsEnabled(y) {
    /**
     * @todo get rid of dom reference
     */
    const buttons = document.getElementsByTagName('button');

    Array.prototype.forEach.call(buttons, (x) => {
      if (y === false) {
        x.style.background = '#efefef';
        x.disabled = true;
      } else {
        x.style.background = x.className === 'submit' ? '#c0e8b2' : '#ffa3a3';
        x.disabled = false;
      }
    });
  }

  constructor() {
    super();
    this.state = {
      userProfile: {},
      newComment: '',
    };
  }

  componentWillMount() {
    fetch('/authenticate/getUserProfile', {
      method: 'POST',
      body: null,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then((data) => {
        if (data.data !== false) {
          this.setState({ userProfile: data.data });
        }
      });
  }

  handleInput = (e, key) => this.setState({ [key]: e.target.value });

  clearComment = () => this.setState({ newComment: '' });

  addComment() {
    const { newComment, userProfile } = this.state;
    const { id, update } = this.props;
    if (userProfile.username) {
      this.buttonsEnabled(false);

      const payload = {
        idString: id,
        comment: newComment,
        name: userProfile.username,
      };

      fetch('/posts/add-article-comment', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then((data) => {
          if (data.status === 'sent') {
            alert('Comment Posted');
            this.clearComment();
          } else {
            alert('Something went wrong.');
          }
          update();
          this.buttonsEnabled(true);
        });
    } else {
      alert('Must be logged in to post a comment.');
    }
  }

  render() {
    const { comments } = this.props;
    const { newComment } = this.state;
    return (
      <>
        <div className="comments-box">
          <h3 className="title title--comments">
            {`Comments (${comments.length})`}
          </h3>
          <br />
          <textarea
            onInput={() => this.handleInput(event, 'newComment')}
            value={newComment}
          />
          <br />
          <button
            type="button"
            className="reset"
            onClick={this.clearComment}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.addComment.bind(this)}
            className="submit"
          >
              Submit
          </button>
        </div>
        <div className="existing-comments-box">

          {comments.map(x => (
            <div className="comment">
              <p className="author">
                {x.author}
              </p>
              <div>
                {x.comment}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

ArticleComments.defaultProps = {
  id: '',
  update: '',
  comments: [],
};

ArticleComments.propTypes = {
  id: PropTypes.string,
  update: PropTypes.func,
  comments: PropTypes.array,
};

export default ArticleComments;

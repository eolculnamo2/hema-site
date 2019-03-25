/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      username: '',
      url: '',
      imgUrl: '',
      body: '',
    };
  }

  handleInput = (e, key) => this.setState({ [key]: e.target.value });

  submitSubmissionApproval = () => {
    const x = prompt('Enter Administrator Password');
    const {
      title, author, username, url, imgUrl, body,
    } = this.state;

    const payload = {
      test: x,
      title,
      author,
      username,
      url,
      imgUrl,
      body,
    };

    fetch('/posts/new-article', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => alert(data.data));
  }

  render() {
    return (
      <>
        <form action="#">
          <h4>Title</h4>
          <input onInput={() => this.handleInput(event, 'title')} />
          <h4>Author</h4>
          <input onInput={() => this.handleInput(event, 'author')} />
          <h4>Username</h4>
          <input onInput={() => this.handleInput(event, 'username')} />
          <h4>Image URL</h4>
          <input onInput={() => this.handleInput(event, 'imgUrl')} />
          <h4>Page URL</h4>
          <input onInput={() => this.handleInput(event, 'url')} />
          <h4>Body(New Paragraphs separated by **P**)</h4>
          <textarea onInput={() => this.handleInput(event, 'body')} />
          <br />
          <button type="button" onClick={this.submitSubmissionApproval}>
          Create Article
          </button>
        </form>
      </>
    );
  }
}

export default Admin;

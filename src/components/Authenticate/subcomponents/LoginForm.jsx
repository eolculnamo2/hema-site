/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import React from 'react';

function keypressListener(e) {
  if (e.which === 13 || e.keyCode === 13) {
    this.login();
  }
}

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keypress', keypressListener.bind(this));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', keypressListener.bind(this));
  }

  handleInput = (e, key) => this.setState({ [key]: e.target.value });

  login() {
    const { username, password } = this.state;
    if (typeof window !== 'undefined') {
      // need to add front end validations
      const payload = { username, password };
      if (payload.username.trim().length === 0) {
        alert('Please enter your username.');
      } else if (payload.password.trim().length === 0) {
        alert('Please enter your password.');
      } else {
        fetch('/authenticate/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            alert('Login Failed');
          })
          .then((data) => {
            alert(data.data);
            document.location.replace('/profile');
          });
      }
    }
  }


  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className="registration__form-wrap">
          <h3 className="registration__header">Authentication</h3>
          <div className="registration__flex-inputs registration__flex-inputs--login">
            <div className="registration__input">
              <p>Username</p>
              <input
                onInput={() => this.handleInput('username', event)}
                value={username}
                className="sp-input sp-input--maintain-width"
              />
            </div>
            <div className="registration__input">
              <p>Password</p>
              <input
                onInput={() => this.handleInput('password', event)}
                value={password}
                className="sp-input sp-input--maintain-width"
                type="password"
              />
            </div>
            <button
              type="button"
              style={{ marginBottom: '12em' }}
              className="registration__button"
              onClick={this.login.bind(this)}
            >
                    Login
            </button>
          </div>
        </div>
      </>
    );
  }
}


export default LoginForm;

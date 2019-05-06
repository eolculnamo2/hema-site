/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      displayName: '',
      imageUrl: '',
      location: '',
      studyGroup: '',
      headline: '',
      skill1: '',
      skill2: '',
      skill3: '',
    };
  }

  handleInput = (e, key) => this.setState({ [key]: e.target.value });

  createUser() {
    const {
      username,
      email,
      confirmEmail,
      password,
      confirmPassword,
      displayName,
      imageUrl,
      location,
      studyGroup,
      headline,
      skill1,
      skill2,
      skill3,
    } = this.state;

    if (this.checkRequired() && typeof window !== 'undefined') {
      const payload = {
        username,
        email,
        confirmEmail,
        password,
        confirmPassword,
        displayName,
        imageUrl,
        location,
        studyGroup,
        headline,
        skill1,
        skill2,
        skill3,
      };

      if (payload.email !== payload.confirmEmail) {
        alert('Email and Confirm Email Must Match');
      } else if (payload.password !== payload.confirmPassword) {
        alert('Password and Confirm Password Must Match');
      } else {
        fetch('/authenticate/register', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then((data) => {
            alert(data.data);
            document.location.replace('/profile');
          });
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkRequired() {
    /**
     * @note required validations.
     * @todo Get rid of reference to dom
     */
    let validated = true;
    if (typeof window !== 'undefined') {
      const required = document.getElementsByClassName('register-required');
      const validationError = document.getElementsByClassName('validation-error');
      Array.prototype.forEach.call(required, (x, i) => {
        if (validationError[i]) {
          if (x.value === '' && x.value) {
            validationError[i].style.display = 'block';
            validated = false;
          } else {
            validationError[i].style.display = 'none';
          }
        }
      });
    }
    return validated;
  }

  render() {
    return (
      <>
        <div className="registration__form-wrap">
          <h3 className="registration__header">User Information</h3>
          <div className="registration__flex-inputs">
            <div className="registration__input">
              <p>Username*</p>
              <input onInput={() => this.handleInput(event, 'username')} className="sp-input register-required" />
              <br />
              <span className="validation-error">This field is required</span>
            </div>
            <div className="registration__input">
              <p>Display Name*</p>
              <input onInput={() => this.handleInput(event, 'displayName')} className="sp-input register-required" placeholder="FirstName LastName" />
              <br />
              <span className="Validation-error">This field is required</span>
            </div>
            <div className="registration__input">
              <p>Email*</p>
              <input onInput={() => this.handleInput(event, 'email')} className="sp-input register-required" />
              <br />
              <span className="validation-error">This field is required</span>
            </div>
            <div className="registration__input">
              <p>Confirm Email*</p>
              <input onInput={() => this.handleInput(event, 'confirmEmail')} className="sp-input register-required" />
              <br />
              <span className="validation-error">This field is required</span>
            </div>
            <div className="registration__input">
              <p>Password*</p>
              <input onInput={() => this.handleInput(event, 'password')} className="sp-input register-required" type="password" />
              <br />
              <span className="validation-error">This field is required</span>
            </div>
            <div className="registration__input">
              <p>Confirm Password*</p>
              <input onInput={() => this.handleInput(event, 'confirmPassword')} className="sp-input register-required" type="password" />
              <br />
              <span className="validation-error">This field is required</span>
            </div>
          </div>
        </div>
        <div className="registration__form-wrap">
          <h3 className="registration__header">Profile Details</h3>
          <div className="registration__flex-inputs">
            <div className="registration__input">
              <p>Profile Picture URL</p>
              <input onInput={() => this.handleInput(event, 'imageUrl')} className="sp-input" placeholder="Use a stable link" />
            </div>
            <div className="registration__input">
              <p>Location</p>
              <input onInput={() => this.handleInput(event, 'location')} className="sp-input" />
            </div>
            <div className="registration__input">
              <p>Headline</p>
              <input onInput={() => this.handleInput(event, 'headline')} className="sp-input" />
            </div>
            <div className="registration__input">
              <p>Study Group Name</p>
              <input onInput={() => this.handleInput(event, 'studyGroup')} className="sp-input" />
            </div>
          </div>
          <h3 className="registration__header">Top 3</h3>
          <em className="registration__explain">What are you best at (i.e. Longsword, Sword and Buckler, Ringen)</em>
          <div className="registration__flex-inputs">
            <div className="registration__input">
              <p>Skill 1</p>
              <input onInput={() => this.handleInput(event, 'skill1')} className="sp-input" />
            </div>
            <div className="registration__input">
              <p>Skill 2</p>
              <input onInput={() => this.handleInput(event, 'skill2')} className="sp-input" />
            </div>
            <div className="registration__input">
              <p>Skill 3</p>
              <input onInput={() => this.handleInput(event, 'skill3')} className="sp-input" />
            </div>
          </div>
          <button
            type="button"
            className="registration__button"
            onClick={this.createUser.bind(this)}
          >
              Create Account
          </button>
        </div>
      </>
    );
  }
}

export default RegistrationForm;

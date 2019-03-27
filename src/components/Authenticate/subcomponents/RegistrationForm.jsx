/* eslint-disable no-alert */
import React from 'react';

class RegistrationForm extends React.Component {
  static checkRequired() {
    // required validations.

    /**
     * @todo Get rid of reference to dom
     */
    let validated = true;
    if (typeof window !== 'undefined') {
      const required = document.getElementsByClassName('register-required');
      const validationError = document.getElementsByClassName('validation-error');
      Array.prototype.forEach.call(required,(x,i) => {
        if (x.value === '' || x.value === undefined || x.value === null) {
          validationError[i].style.display = 'block';
          validated = false;
        } else {
          validationError[i].style.display = 'none';
        }
      });
    }
    return validated;
  }

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

  render() {
      return(
          <div>
              <div className="registration__form-wrap">
                  <h3 className="registration__header">
                      User Information
                  </h3>
                  <div className="registration__flex-inputs">
                      <div className="registration__input">
                          <p>
                              Username*
                          </p>
                          <input id="username" className="sp-input register-required" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                      <div className="registration__input">
                          <p>
                              Display Name*
                          </p>
                          <input id="displayName" className="sp-input register-required" placeholder="FirstName LastName" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                      <div className="registration__input">
                          <p>
                              Email*
                          </p>
                          <input id="email" className="sp-input register-required" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                      <div className="registration__input">
                          <p>
                              Confirm Email*
                          </p>
                          <input id="confirmEmail" className="sp-input register-required" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                      <div className="registration__input">
                          <p>
                              Password*
                          </p>
                          <input id="password" className="sp-input register-required" type="password" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                      <div className="registration__input">
                          <p>
                              Confirm Password*
                          </p>
                          <input id="confirmPassword" className="sp-input register-required" type="password" />
                          <br/><span class='validation-error'>This field is required</span>
                      </div>
                  </div>
              </div>
              <div className="registration__form-wrap">
                  <h3 className="registration__header">
                      Profile Details
                  </h3>
                  <div className="registration__flex-inputs">
                      <div className="registration__input">
                          <p>
                              Profile Picture URL
                          </p>
                          <input id="imageUrl" className="sp-input" placeholder="Use a stable link" />
                      </div>
                      <div className="registration__input">
                          <p>
                              Location
                          </p>
                          <input id="location" className="sp-input" />
                      </div>
                      <div className="registration__input">
                          <p>
                              Headline
                          </p>
                          <input id="headline" className="sp-input" />
                      </div>
                      <div className="registration__input">
                          <p>
                              Study Group Name
                          </p>
                          <input id="studyGroup" className="sp-input" />
                      </div>
                  </div>
                  <h3 className="registration__header">
                      Top 3
                  </h3>
                  <em className="registration__explain">What are you best at (i.e. Longsword, Sword and Buckler, Ringen)</em>
                  <div className="registration__flex-inputs">
                      <div className="registration__input">
                          <p>
                              Skill 1
                          </p>
                          <input id="skill1" className="sp-input" />
                      </div>
                      <div className="registration__input">
                          <p>
                              Skill 2
                          </p>
                          <input id="skill2" className="sp-input" />
                      </div>
                      <div className="registration__input">
                          <p>
                              Skill 3
                          </p>
                          <input id="skill3" className="sp-input" />
                      </div>
                  </div>
                  <button type="button" 
                          className="registration__button"
                          onClick={this.createUser.bind(this)}
                          >
                      Create Account
                  </button>
              </div>
          </div>
      )
  }
}

export default RegistrationForm;

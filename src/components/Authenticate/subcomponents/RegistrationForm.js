import React from 'react'

class RegistrationForm extends React.Component {
    createUser(){
        //need to add front end validations
        let payload = {
            username: document.getElementById('username').value.toLowerCase().trim(),
            email: document.getElementById('email').value.trim(),
            confirmEmail: document.getElementById('confirmEmail').value.trim(),
            password: document.getElementById('password').value.trim(),
            confirmPassword: document.getElementById('confirmPassword').value.trim(),
            displayName: document.getElementById('displayName').value.toLowerCase().trim(),
            imageUrl: document.getElementById('imageUrl').value.trim(),
            location: document.getElementById('location').value.trim(),
            studyGroup: document.getElementById('studyGroup').value.toLowerCase().trim(),
            headline: document.getElementById('headline').value.trim(),
            skill1: document.getElementById('skill1').value.toLowerCase().trim(),
            skill2: document.getElementById('skill2').value.toLowerCase().trim(),
            skill3: document.getElementById('skill3').value.toLowerCase().trim(),
        }

        if(payload.email !== payload.confirmEmail) {
            alert("Email and Confirm Email Must Match")
        }
        else if(payload.password !== payload.confirmPassword) {
            alert("Password and Confirm Password Must Match")
        }
        else {
        fetch('/authenticate/register',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
            })
            .then( res => res.json())
            .then( data => alert(data.data))
        }
    }
    render(){
        return(
            <div>
                <div className="registration__form-wrap">
                    <h3 className="registration__header">
                        User Information
                    </h3>
                    <div className="registration__flex-inputs">
                        <div className="registration__input">
                            <p>
                                Username
                            </p>
                            <input id="username" className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Display Name
                            </p>
                            <input id="displayName" className="sp-input" placeholder="FirstName LastName" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Email
                            </p>
                            <input id="email" className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Confirm Email
                            </p>
                            <input id="confirmEmail" className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Password
                            </p>
                            <input id="password" className="sp-input" type="password" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Confirm Password
                            </p>
                            <input id="confirmPassword" className="sp-input" type="password" />
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

export default RegistrationForm
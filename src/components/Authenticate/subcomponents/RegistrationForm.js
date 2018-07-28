import React from 'react'

class RegistrationForm extends React.Component {
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
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Display Name
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Email
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Confirm Email
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Password
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Confirm Password
                            </p>
                            <input className="sp-input" />
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
                                Profile Picture
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Location
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Headline
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Study Group Name
                            </p>
                            <input className="sp-input" />
                        </div>
                    </div>
                    <h3 className="registration__header">
                        Top 3
                    </h3>
                    <em className="registration__explain">What are you best at (i.e. Longsword, Sword and Buckler, Ringer)</em>
                    <div className="registration__flex-inputs">
                        <div className="registration__input">
                            <p>
                                Skill 1
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Skill 2
                            </p>
                            <input className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Skill 3
                            </p>
                            <input className="sp-input" />
                        </div>
                   </div>
                   <button type="button" className="registration__button">
                        Create Account
                   </button>
                </div>
            </div>
        )
    }
}

export default RegistrationForm
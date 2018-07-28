import React from 'react'

class LoginForm extends React.Component {
    login(){
        //need to add front end validations
        let payload = {
            username: document.getElementById('username').value.toLowerCase().trim(),
            password: document.getElementsById('password').value.trim()
        }

        fetch('/authenticate/login',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
            })
            .then( res => res.json())
            .then( data => alert(data.data))
    }
    render(){
        return(
            <div>
                <div className="registration__form-wrap">
                    <h3 className="registration__header">
                        Authentication
                    </h3>
                    <div className="registration__flex-inputs registration__flex-inputs--login">
                        <div className="registration__input">
                            <p>
                                Username
                            </p>
                            <input id="username" className="sp-input" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Password
                            </p>
                            <input id="password" className="sp-input" />
                        </div>
                   <button type="button" 
                            style={{marginBottom: "12em"}}
                           className="registration__button"
                           onClick={this.login.bind(this)}
                            >
                        Login
                   </button>
                </div>
            </div>
        </div>
        )
    }
}


export default LoginForm
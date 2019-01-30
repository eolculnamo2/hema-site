import React from 'react'

class LoginForm extends React.Component {
    componentWillMount(){
        if(typeof window !== 'undefined') {
            window.addEventListener('keypress', e => {
                if (e.which === 13 || e.keyCode === 13) {
                    this.login()
                }
            })
        }
    }
    login(){
        if(typeof window !== 'undefined') {
        //need to add front end validations
        let payload = {
            username: document.getElementById('username').value.toLowerCase().trim(),
            password: document.getElementById('password').value.trim()
        }
        if(payload.username.trim().length === 0){
            alert("Please enter your username.")
        }
        else if (payload.password.trim().length === 0) {
            alert("Please enter your password.")
        }
        else {
        fetch('/authenticate/login',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => {
                if(res.status === 200){
                    return res.json()
                }
                else {
                    alert("Login Failed")
                }
            })
            .then( data => {
                if(data.data !== "Login Successful!") {
                    alert(data.data)
                }
                document.location.replace("/profile")
            })
        }
        }
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
                            <input id="username" className="sp-input sp-input--maintain-width" />
                        </div>
                        <div className="registration__input">
                            <p>
                                Password
                            </p>
                            <input id="password" className="sp-input sp-input--maintain-width" type="password" />
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
import React from 'react'
import Row1 from './subcomponents/Row1'
import LoginForm from './subcomponents/LoginForm'
class Login extends React.Component {
    render(){
        return(
            <div>
                <Row1 heading="Login" />
                <LoginForm />
            </div>
        )
    }
}

export default Login
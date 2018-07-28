import React from 'react'
import Row1 from './subcomponents/Row1'
import RegistrationForm from './subcomponents/RegistrationForm'

class Authenticate extends React.Component {
    render(){
        return(
            <div>
                <Row1 />
                <RegistrationForm />
            </div>
        )
    }
}

export default Authenticate
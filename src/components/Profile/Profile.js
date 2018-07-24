import React from 'react'
import Row1 from './subcomponents/Row1'

let dummyUser = {
    username: 'rbertram8',
    displayName: 'Rob Bertram',
    headline: 'Men are born, live, and die all in accordance with the same rules'
}

class Profile extends React.Component {
    render(){
        return(
            <div>
                <Row1 user={dummyUser} />
            </div>
        )
    }
}

export default Profile
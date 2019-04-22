import React from 'react';
import Row1 from './subcomponents/Row1';
import ProfileBody from './subcomponents/ProfileBody';

class Profile extends React.Component {
    constructor(){
        super()
        this.state={
            userProfile: {},
            isContact: true
        }
    }
    componentWillMount(){
        if(!this.props.match.params.profile && typeof window !== 'undefined'){
        fetch('/authenticate/getUserProfile',{
            method: "POST",
            body: null,
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => res.json())
            .then( data => {
                if (data.data !== false) {
                    this.setState({userProfile: data.data})
                }
                else {
                    window.location.replace("https://www.sword-point.com/")
                }
            })
        }
        else if(this.props.match.params.profile && typeof window !== 'undefined') {
            fetch('/authenticate/getProfile',{
                method: "POST",
                body: JSON.stringify({profile: this.props.match.params.profile}),
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin"
                })
                .then( res => res.json())
                .then( data => {
                    if (data.data !== false) {
                        this.setState({userProfile: data.data, isContact: data.isContact})
                    }
                    else {
                        alert("Profile Not Found!")
                        window.location.replace("https://www.sword-point.com/")
                    }
                })
            }
        }

    render(){
        if (this.state.userProfile.username) {
        return(
            <div>
                <Row1 user={this.state.userProfile}
                      isContact={this.state.isContact} />
                <ProfileBody user={this.state.userProfile} />
            </div>
        )
        }
        else{
            return(<div></div>)
        }
    }
}

export default Profile
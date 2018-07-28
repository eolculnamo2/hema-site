import React from 'react'
import ContactBox from './ContactBox'

class ProfileBody extends React.Component {
    componentDidMount(){
        document.getElementById('profile-pic').onerror = function() { 
            document.getElementById('profile-pic').src = "https://image.ibb.co/fhe2KJ/polearms.jpg"; 
          }
    }
    render(){
        return(
            <div className="profile-body-wrap">
                <div className="flex-img-details">
                    <div className="profile-flexed-item">
                        <img id='profile-pic' className="profile-picture" src={this.props.user.profileImage}/>
                    </div>
                    <div className="profile-flexed-item profile-flexed-item--nested-flex">
                        <div className="profile-details">
                            <h3>
                                Location
                            </h3>
                            <p>
                                {this.props.user.location}
                            </p>
                            <p>
                                {this.props.user.group}
                            </p>
                        </div>
                        <div className="profile-details">
                            <h3>
                                Best Three
                            </h3>
                        {this.props.user.bestThree.length === 0 ? "No Best Three Added" : 
                        this.props.user.bestThree.map( x => <p>{x}</p>)}
                        </div>
                        <div className="profile-details">
                            <h3>
                                My Articles
                            </h3>
                        {this.props.user.articles.length === 0 ? "No Articles Written" : 
                        this.props.user.articles.map( x => <a href={'https://www.sword-point.com/article/'+x['_id']}><p>{x.title}</p></a>)}
                        </div>
                    </div>
                </div>
                <div className="profile-flexed-item">
                    <ContactBox contacts={this.props.user.contacts}/>
                </div>
            </div>
        )
    }
}

export default ProfileBody
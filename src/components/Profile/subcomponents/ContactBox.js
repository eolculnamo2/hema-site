import React from 'react'

class ContactBox extends React.Component {
    componentDidMount(){
        let ci = document.getElementsByClassName('contact-image')
        Array.prototype.forEach.call(ci, x => {
           x.onerror = function() { 
               x.src = "https://image.ibb.co/fhe2KJ/polearms.jpg"; 
            }
        })
        
    }
    render(){
        return(
            <div className="contact-box-wrap">
            <h3>
                Contacts
            </h3> 
            <div className="contact-flex">
                {this.props.contacts.length === 0 ? "No Contacts Added" :
                this.props.contacts.map((x,i) => {
                    if(i < 4) {
                    return (
                        <div className="contact-image-parent">
                                <a href={"https://www.sword-point.com/profile/"+x.username}>
                                    <img className="contact-image" src={x.image}/>
                                </a>
                        </div>
                    )
                    }
                })}
            </div>
            </div>
        )
    }
}

export default ContactBox
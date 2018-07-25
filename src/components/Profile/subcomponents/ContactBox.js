import React from 'react'

const ContactBox = props => {
    return(
        <div className="contact-box-wrap">
          <h3>
              Contacts
          </h3> 
          <div className="contact-flex">
            {props.contacts.map((x,i) => {
                if(i < 4) {
                   return (
                       <div className="contact-image-parent">
                        <img className="contact-image" src={x.image}/>
                       </div>
                   )
                }
            })}
          </div>
        </div>
    )
}

export default ContactBox
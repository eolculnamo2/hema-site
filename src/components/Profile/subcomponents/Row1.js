import React from 'react'

class Row1 extends React.Component {
    addContact(){
        let payload = {
            username: this.props.user.username,
            image:this.props.user.profileImage
        }
        fetch('/authenticate/add-contact',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
            .then( res => res.json())
            .then( data => {
                if(data.data){
                    alert("Added!")
                }
                else{
                    alert("Add failed.. Make sure you're logged in!")
                }
                window.location.reload()
            })
    }
    render(){
        return(
            <div className='row1-wrapper'>
                <div>
                    <div className="flex-start">
                        <h3 className="title title--username">
                            {this.props.user.displayName}
                        </h3>
                        {this.props.isContact === false ? 
                        <button className="add-button" onClick={this.addContact.bind(this)}>
                            Add Contact
                        </button>
                        : ""
                        }
                    </div>
                    <p className="headline">
                        {this.props.user.headline}
                    </p>
                </div>
                <div className="random-quote">
                    <p>
                        The bound may flee whither he chooses, but of this you should be 
                    </p>
                    <p>
                        admonished. Wherever the Bound flees, you should follow him.
                    </p>
                    <p>
                        I33
                    </p>
                </div>
            </div>
        )
    }
}

export default Row1
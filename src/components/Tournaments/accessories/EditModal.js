import React from 'react'

class EditModal extends React.Component {
    
    render(){
        return (
            <div style={{display: this.props.showModal ? 'block' : 'none'}}>
                <div className="tournaments__edit-modal-wrap">
                </div>
                    <div className="tournaments__edit-modal-wrap2">
                    <div class="tournaments__edit-modal">
                        <h3 className="tournaments__modal-heading">
                            Edit Participant
                        </h3>
                        <em>
                            Click to edit
                        </em>
                        <p>
                            Name: <span>{this.props.user.name}</span>
                        </p>
                        <p>
                            Age: <span>{this.props.user.age}</span>
                        </p>
                        <p>
                            Gender: <span>{this.props.user.gender}</span>
                        </p>
                        <p>
                            Affiliation: <span>{this.props.user.affiliation}</span>
                        </p>
                       <p>
                           Payment Status : <span>{this.props.user.paid ? 'Paid' : 'Pending'}</span>
                        </p>
                        <p>
                            Events: <span>{this.props.user.events}</span>
                        </p>
                        <div className="c-Tournament-flex-buttons">
                            <button className="c-Tournament-button c-Tournament-button--submit c-Tournament-button--block">
                                Save Changes
                            </button>
                            <button className="c-Tournament-button c-Tournament-button--reset c-Tournament-button--block" 
                            onClick={this.props.hideModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal
import React from 'react'

class EditModal extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: false,
            ageInput: false,
            genderInput: false,
            affiliationInput: false,
            statusInput: false,
            eventsInput: false
        }
    }
    
    static getDerivedStateFromProps(props,state) {
        if(props.edit === false) {
            return {
                nameInput: true,
                ageInput: true,
                genderInput: true,
                affiliationInput: true,
                statusInput: true,
                eventsInput: true
            }
        }
    }

    toggleInput(x,state) {
        if(!this.state[state] && this.props.enableToggle){
            return <span>{x}</span>
        }
        else if(state === 'genderInput') {
            return (<select id={state}>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>)
        }
        else if(state === "statusInput") {
            return (
                    <select id={state}>
                        <option value={true}>Paid</option>
                        <option value={false}>Pending</option>
                    </select>
            )
        }
        else if(state === "eventsInput") {
            return (
                <select id={state}>
                    {this.props.user.events.map( x => {
                       return <option value={x}>{x}</option>
                    })}
                </select>
            )
        }
        else {
            return <input placeholder={x} id={state} />
        }
    }

    resetInputs(close) {
        this.setState({
            nameInput: false,
            ageInput: false,
            genderInput: false,
            affiliationInput: false,
            statusInput: false,
            eventsInput: false
        }, () => {
            if(close) {
                this.props.hideModal()
            }
        })
    }

    render(){
        return (
            <div style={{display: this.props.showModal ? 'block' : 'none'}}>
                <div className="tournaments__edit-modal-wrap">
                </div>
                    <div className="tournaments__edit-modal-wrap2">
                    <div class="tournaments__edit-modal">
                        <h3 className="tournaments__modal-heading">
                            {this.props.edit ? 'Edit' : 'Add'} Participant
                        </h3>
                        <em>
                        {this.props.edit ? 'Double click to edit' : 'Create new participant'}
                        </em>
                        <p onDoubleClick={()=>{this.state.nameInput ? this.setState({nameInput: false}) : this.setState({nameInput: true})}}>
                            Name: <span>
                                    {this.toggleInput(this.props.user.name, 'nameInput')}
                                </span>
                        </p>
                        <p onDoubleClick={()=>{this.state.ageInput ? this.setState({ageInput: false}) : this.setState({ageInput: true})}}>
                            Age: <span>
                            {this.toggleInput(this.props.user.age, 'ageInput')}
                            </span>
                        </p>
                        <p onDoubleClick={()=>{this.state.genderInput ? this.setState({genderInput: false}) : this.setState({genderInput: true})}}>
                            Gender: <span>
                                {this.toggleInput(this.props.user.gender, 'genderInput')}
                            </span>
                        </p>
                        <p onDoubleClick={()=>{this.state.affiliationInput ? this.setState({affiliationInput: false}) : this.setState({affiliationInput: true})}}>
                            Affiliation: <span>
                                {this.toggleInput(this.props.user.affiliation, 'affiliationInput')}
                            </span>
                        </p>
                       <p onDoubleClick={()=>{this.state.statusInput ? this.setState({statusInput: false}) : this.setState({statusInput: true})}}>
                           Payment Status : <span>
                            {this.toggleInput(this.props.user.paid ? 'Paid' : 'Pending', 'statusInput')}
                            </span>
                        </p>
                        <p onDoubleClick={()=>{this.state.eventsInput ? this.setState({eventsInput: false}) : this.setState({eventsInput: true})}}>
                            Events: <span>
                                {this.toggleInput(this.props.user.events, 'eventsInput')}
                            </span>
                        </p>
                        <div className="c-Tournament-flex-buttons">
                            <button className="c-Tournament-button c-Tournament-button--submit c-Tournament-button--block">
                                Save Changes
                            </button>
                            <button className="c-Tournament-button c-Tournament-button--reset c-Tournament-button--block" 
                            onClick={this.resetInputs.bind(this, true)}>
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
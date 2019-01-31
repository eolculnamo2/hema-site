//Shows two contestants competing.
import React from 'react'

class Match extends React.Component {
    constructor() {
        super();
        this.state = {
            editMode: false,
            fighter1: "", //For update only. Saved fighter data comes via props. This tracks participant ID for updates
            fighter2: ""
        }

        this.setEditFalse = this.setEditFalse.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleUpdate(fighter, event) {
        const updateObj = {}
        updateObj[fighter] = event.target.value;
        this.setState(updateObj);
    } 

    edit() {
        this.setState({editMode: true})
    }

    setEditFalse() {
        this.setState({editMode: false})
    }

    saveChanges() {
        if(this.state.fighter1.length > 0 && this.state.fighter2.length > 0) {
            this.props.updateRounds(this.state.fighter1,
                                    this.state.fighter2,
                                    this.props.index)
            this.setEditFalse()
        } else {
            alert("Both values must be entered")
        }
    }

    handleClick() {
        if(this.props.editable) {
            this.edit();
        } else {
            this.props.handleClick(this.props.index);
        }
    }

    render() {
        if(this.state.editMode === false) {
            return (
                <div className="c-Tournament__card-wrap" onClick={this.handleClick}>
                    <h2 className="c-Tournament__card-round">Round {this.props.index+1}</h2>
                    <div className="c-Tournament__card-flex">
                        <div>
                            <h3>{this.props.info.fighter1}</h3>
                            <em>{this.props.info.fighter1Club}</em>
                        </div>
                        <div>
                            <h3>{this.props.info.fighter2}</h3>
                            <em>{this.props.info.fighter2Club}</em>
                        </div>
                    </div>
                </div>
            )
        } else { //EDIT VIEW
            return (
                <div className="c-Tournament__card-wrap">
                    <h2 className="c-Tournament__card-round">Round {this.props.index+1}</h2>
                    <div className="c-Tournament__card-flex">
                        <div>
                            <h3>{this.props.info.fighter1}</h3>
                            <em>{this.props.info.fighter1Club}</em>
                            <select value={this.state.fighter1} 
                                    onChange={this.handleUpdate.bind(this,"fighter1")}>
                                    <option selected value="">Select</option>
                                    {this.props.participants.map( x => <option value={x.participantId}>{x.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <h3>{this.props.info.fighter2}</h3>
                            <em>{this.props.info.fighter2Club}</em>
                            <select value={this.state.fighter2}
                                    onChange={this.handleUpdate.bind(this,"fighter2")}>
                                    <option selected value="">Select</option>
                                {this.props.participants.map( x => <option value={x.participantId}>{x.name}</option>)}
                            </select>
                        </div>
                    </div>
                    <button className="c-Tournament-button c-Tournament-button--card-btn c-Tournament-button--submit"
                            onClick={this.saveChanges}>
                        Save
                    </button>
                    <button className="c-Tournament-button c-Tournament-button--card-btn c-Tournament-button--reset"
                            onClick={this.setEditFalse}>
                        Cancel
                    </button>
                </div>
            )
        }
    }
}

export default Match;
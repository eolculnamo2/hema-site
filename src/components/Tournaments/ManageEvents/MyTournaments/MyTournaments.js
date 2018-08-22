import React from 'react'
import ManageLeftPanel from '../ManageLeftPanel'
import TopBar from '../../accessories/TopBar';
import MyEvents from './subcomponents/MyEvents'
import MyParticipants from './subcomponents/MyParticipants'
import MyDetails from './subcomponents/MyDetails'

let dummyData = [
    {
        name: "Combat Con, 2018",
        location: "Las Vegas, NV, USA",
        dates: "Aug 2nd -  Aug 5th",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png",
        _id: '232903293' 
    },
    {
        name: "Super Event",
        location: "Las Vegas, NV, USA",
        dates: "Aug 2nd -  Aug 5th",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png",
        _id: '232312132132131'
    },
    {
        name: "Super Event 2",
        location: "Las Vegas, NV, USA",
        dates: "Aug 2nd -  Aug 5th",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png",
        _id: 'if329if392233'
    }
]

class MyTournaments extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedTournament: '',
            option: 'events'
        }
    }
    selectedOption(){
        if(this.state.selectedTournament !== '') {
            if(this.state.option === 'events') {
                return <MyEvents events={['Longsword', 'Sword and Buckler', 'Ringen']} />
            }
            else if(this.state.option === 'participants') {
                return <MyParticipants />
            }
            else if(this.state.option === 'details') {
                return <MyDetails />
            }
        }
    }
    render(){
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                <TopBar title="My Tournaments" buttons={[]} />
                    <em className="c-Tournament__section">Select an Event</em>
                    <div className="c-Tournament__section c-Tournament__section--flex-start">
                        {dummyData.map( x => {
                            return( <div>
                                        <input  type="radio" 
                                                name="selectedTournament" 
                                                value={x['_id']}
                                                onClick={()=>{this.setState({selectedTournament: x['_id']})}} />
                                        <span className="tournaments__radio">{x.name}</span>
                                    </div>) 
                        })}
                    </div>

                    <div className="c-Tournament__section c-Tournament__section--no-wrap submission__flex submission__flex--tournament-manager"
                         style={{display: this.state.selectedTournament === '' ? 'none' : 'flex'}}>
                        <button className={this.state.option === 'events' ? 'submission__selected-option el-option-button' : "el-option-button"}
                                type="button"
                                onClick={()=>{this.setState({option: 'events'})}}>
                            Events
                        </button>
                        <button className={this.state.option === 'participants' ? 'submission__selected-option el-option-button' : "el-option-button"}
                                type="button"
                                onClick={()=>{this.setState({option: 'participants'})}}>
                            Participants
                        </button>
                        <button className={this.state.option === 'details' ? 'submission__selected-option el-option-button' : "el-option-button"}
                                type="button"
                                onClick={()=>{this.setState({option: 'details'})}}>
                            Details
                        </button>
                    </div>
                    {this.selectedOption()}
                </div>
            </div>
        )
    }
}

export default MyTournaments
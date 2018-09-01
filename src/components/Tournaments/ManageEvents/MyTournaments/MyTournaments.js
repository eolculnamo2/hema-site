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
            myTournaments: []
        }
        this.addEvent = this.addEvent.bind(this)
    }
    componentDidMount(){
        this.getMyTournaments()
    } 
    getMyTournaments(){
        fetch('/tournaments/get-my-tournaments',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
        .then(res => res.json())
        .then(data => this.setState({myTournaments: data}))
    }
    selectedOption(){
        let cardData = {}

        for(let x of this.state.myTournaments) {
            if(x['_id'] === this.state.selectedTournament){
                cardData = x
                break
            }
        }
        if(this.state.selectedTournament !== '' && cardData.name !== undefined) {
            return <MyEvents events={cardData.events}
                                card={cardData}
                                addEvent={this.addEvent} />
        }
    }
    addEvent(x) {
        let payload = {
            //event-name lives in MyEvent.js
            event: document.getElementById('event-name').value.trim(),
            tournamentId: this.state.selectedTournament
        }
        fetch('/tournaments/add-tournament-event',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
        .then(res => res.json())
        .then(data => {
            alert('Event Added')
            this.getMyTournaments()
            document.getElementById('event-name').value = ''
        })
    }
    render(){
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="My Tournaments" />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                <TopBar title="My Tournaments" buttons={[]} />
                    <em className="c-Tournament__section">Select a Tournament</em>
                    <div className="c-Tournament__section c-Tournament__section--flex-start">
                        {this.state.myTournaments.map( x => {
                            return( <div>
                                        <input  type="radio" 
                                                name="selectedTournament" 
                                                value={x['_id']}
                                                onClick={()=>{this.setState({selectedTournament: x['_id']})}} />
                                        <span className="tournaments__radio">{x.name}</span>
                                    </div>) 
                        })}
                    </div>
                    {this.selectedOption()}
                </div>
            </div>
        )
    }
}

export default MyTournaments
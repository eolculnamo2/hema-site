import React from 'react'
import Chart from 'chart.js'
import TopBar from '../../accessories/TopBar'
import EditModal from '../../accessories/EditModal';
import Match from './subcomponents/Match';

const buttons = [
    {
        text: "Add Participant",
        fx: 'activateModal'
    },
    {
        text: "Refresh",
        fx: 'saveChanges',
        bgColor: '#c0e8b2',
        txtColor: '#333'
    },
    {
        text: "Delete Event",
        fx: 'deleteEvent',
        bgColor: '#ffa3a3',
        txtColor: '#333'
    }
]

class MyEventView extends React.Component {
    constructor() {
        super()
        this.state = {
            paidAndUnpaid: [0,0],
            totalRevenue: 0,
            participants: [],
            matches: [
                {
                    fighter1: "Joe",
                    fighter1Club: "Sword Fighters School",
                    fighter2: "Steve",
                    fighter2Club: "Meyer's Guild"
                },
                {
                    fighter1: "Joe",
                    fighter1Club: "Sword Fighters School",
                    fighter2: "Steve",
                    fighter2Club: "Meyer's Guild"
                },
                {
                    fighter1: "Joe",
                    fighter1Club: "Sword Fighters School",
                    fighter2: "Steve",
                    fighter2Club: "Meyer's Guild"
                },
                {
                    fighter1: "Joe",
                    fighter1Club: "Sword Fighters School",
                    fighter2: "Steve",
                    fighter2Club: "Meyer's Guild"
                },
            ],
            dates: ["Paid", "Pending"],
            showModal: false,
            addApplicant: false,
            tournamentName: '',
            selectedUser: {
                "name": "",
                "affiliation": "",
                "events": [
                    "Longsword"
                ],
                "paid": true,
                "tournamentId": "5b7b6ed8d42d140c7d7f3014",
                "age": "",
                "gender": "",
                "username": ""
            }
        }

        this.hideModal = this.hideModal.bind(this)
        this.showModal = this.showModal.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.getEventDetails = this.getEventDetails.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
        this.updateRounds = this.updateRounds.bind(this);
    }
    componentDidMount() {
        this.getEventDetails()
    }
    showModal(x,i) {
        let notSelected = {
            "name": "",
            "affiliation": "",
            "events": [
                "Longsword"
            ],
            "paid": true,
            "tournamentId": "5b7b6ed8d42d140c7d7f3014",
            "age": "",
            "gender": "",
            "username": ""
        }

        document.body.style.overflow = 'hidden'
        x && x === 'showModal' ? this.setState({selectedUser: this.state.participants[i], showModal: true}) 
            : this.setState({selectedUser: notSelected, addApplicant: true})
    }

    getEventDetails() {
        let event =this.props.match.params.event
        let tournamentId = this.props.match.params.tId
        
        if(typeof window !== 'undefined') {
            fetch('/tournaments/get-a-tournament',{
                method: "POST",
                body: JSON.stringify({tournamentId: tournamentId}),
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin"
                })
            .then(res => res.json())
            .then(data => {
                let paidTotal = 0
                let unPaidTotal = 0
                let participants = []
                data.registeredParticipants.forEach( x => {
                    if(x.events.indexOf(event) > -1) {
                        participants.push(x)
                        x.paid ? paidTotal ++ : unPaidTotal ++
                    }
                })

                let revenue = paidTotal * data.cost
                this.setState({paidAndUnpaid: [paidTotal, unPaidTotal],
                            totalRevenue: revenue,
                            participants: participants,
                            tournamentName: data.name,
                            showModal: false,
                            addApplicant: false}, () => this.participantNumbers())
            })
        }
    }

    saveChanges() {
        this.getEventDetails()
    }

    deleteEvent() {
        let prompt = confirm('Are you sure you want to delete this event?')
        let prompt2 = confirm('Once you delete your event, you cannot undo the change. Sword-Point does not handle refunds and updating participants. Sword-Point is not responsible for any consequences of a deleted event. Are you still sure you want to delete the event?')
    
        if(prompt === true && prompt2 === true) {
            alert("This feature is not yet available. Please contact site admin to delete event.")
        }
    }

    hideModal() {
        document.body.style.overflow = 'unset'
        this.setState({showModal: false, addApplicant: false})
    }
    participantNumbers() {
        if(typeof window !== 'undefined') {
        let ctx = document.getElementById('chart')
            let chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                labels: this.state.dates,
                datasets: [{
                label: "Participants",
                fill: true,
                borderColor: ['#87a37d','#a56f6f'],
                borderWidth: 5,
                pointRadius: 2,
                backgroundColor: ['rgba(192, 232, 178, 1)','rgba(255, 163, 163, 1)'],
                data: this.state.paidAndUnpaid,
                }]
                },
            options: {
                title: {
                    display: true,
                    text: 'Paid vs Pending',
                    fontSize: 16
                },
                legend: {
                position: 'top',
                labels: {
                    boxWidth: 12
                }
                }
                }
            });
        }
    }

    updateRounds(fighter1,fighter2, index) {
        const f1 = this.state.participants.find( x => x.participantId === +fighter1);
        const f2 = this.state.participants.find( x => x.participantId === +fighter2);
        
        const matches = this.state.matches
        matches[index] = {fighter1: f1.name, fighter1Club: f1.affiliation,
                          fighter2: f2.name, fighter2Club: f2.affiliation}
        this.setState({matches})
    }

    render(){
        return(
            <div>
                <EditModal hideModal={this.hideModal} 
                           showModal={this.state.showModal} 
                           user={this.state.selectedUser}
                           edit={true}
                           enableToggle={true}
                           getEventDetails={this.getEventDetails} />

                <EditModal hideModal={this.hideModal} 
                           showModal={this.state.addApplicant}
                           edit={false}
                           user={this.state.selectedUser}
                           tournamentId={this.props.match.params.tId}
                           enableToggle={true}
                           getEventDetails={this.getEventDetails} />

                <TopBar title={this.state.tournamentName+': '+this.props.match.params.event} 
                        buttons={buttons} 
                        activateModal={this.showModal} 
                        saveChanges={this.saveChanges}
                        deleteEvent={this.deleteEvent} />

                <div className="c-Tournament__section c-Tournament__section--gray-bg c-Tournament__section--no-wrap1">
                    <div className="tournaments__table-wrap">
                        <em>Click Participant to Edit</em>
                        <div className="tournaments__table-head tournament__table--full-width">
                            <div>
                                Name
                            </div>
                            <div>
                                Age
                            </div>
                            <div>
                                Payment Status
                            </div>
                        </div>
                        <div className="tournaments__table-body">
                            {this.state.participants.map( (x,i) => {
                                return (
                                        <div className="c-Tournament__section c-Tournament__section--no-wrap c-Tournament__section--row tournament__table--full-width"
                                             onClick={this.showModal.bind(this, 'showModal', i)}>
                                            <div>
                                                {x.name}
                                            </div>
                                            <div>
                                                {x.age}
                                            </div>
                                            <div>
                                                {x.paid ? 'Paid' : 'Pending'}
                                            </div>
                                        </div>
                                        )
                            })}
                        </div>
                    </div>
                    <div className="tournaments__center-numbers">
                        <h3 className="tournaments__heading tournaments__heading--center">Participants</h3>
                        <h1 className="tournaments__heading tournaments__heading--center">{this.state.participants.length}</h1>
                        <h3 className="tournaments__heading tournaments__heading--center">Collected Registration Fees</h3>
                        <h1 className="tournaments__heading tournaments__heading--center">${this.state.totalRevenue}</h1>
                    </div>
                    <div className="c-Tournament__chart-container">
                        <canvas id="chart" height="400px" width="536px"></canvas>
                    </div>
                </div>
                <div className="c-Tournament__matches-wrap">
                    {this.state.matches.map((x,i) => <Match index={i} 
                                                            info={x}
                                                            updateRounds={this.updateRounds}
                                                            participants={this.state.participants} />)}
                </div>
  
            </div>
        )
    }
}

export default MyEventView
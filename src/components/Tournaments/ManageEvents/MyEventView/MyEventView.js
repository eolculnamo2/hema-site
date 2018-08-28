import React from 'react'
import Chart from 'chart.js'
import TopBar from '../../accessories/TopBar'
import EditModal from '../../accessories/EditModal';

let participants = [
    {
        name: "Robert Bertram",
        age: 27,
        paid: true
    },
    {
        name: "Bre Bertram",
        age: 28,
        paid: false
    },
    {
        name: "Sarah Hall",
        age: 23,
        paid: false
    },
    {
        name: "Dale Bertram",
        age: 25,
        paid: true
    }
]

let buttons = [
    {
        text: "Add Participant",
        link: ""
    }
]


class MyEventView extends React.Component {
    //this.props.match.params.event
    constructor() {
        super()
        this.state = {
            data: [27,32],
            dates: ["Paid", "Pending"],
            showModal: false,
            selectedUser: {
                "name": "Robert Bertram",
                "affiliation": "ARMA",
                "events": [
                    "Longsword"
                ],
                "paid": true,
                "tournamentId": "5b7b6ed8d42d140c7d7f3014",
                "age": "27",
                "gender": "M",
                "username": "rbertram8"
            }
        }

        this.hideModal = this.hideModal.bind(this)
    }
    componentDidMount() {
        this.participantNumbers();
    }
    showModal() {
        document.body.style.overflow = 'hidden'
        this.setState({showModal: true})
    }

    hideModal() {
        document.body.style.overflow = 'unset'
        this.setState({showModal: false})
    }

    editParticipant(i){
        //Will handle updating participants
    }
    participantNumbers() {
        let ctx = document.getElementById('chart')

        let chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
            labels: this.state.dates,
            datasets: [{
              label: "Participants",
              fill: true,
              borderColor: ['#c0e8b2','#f3ff99'],
              borderWidth: 1,
              pointRadius: 2,
              backgroundColor: ['rgba(192, 232, 178, 1)','rgba(243, 255, 153, 1)'],
              data: this.state.data,
            }]
            },
           options: {
             legend: {
               position: 'bottom',
               labels: {
                  boxWidth: 12
               }
             }
            }
        });
    }
    render(){
        return(
            <div>
                <EditModal hideModal={this.hideModal} 
                           showModal={this.state.showModal} 
                           user={this.state.selectedUser} />
                <h1 className="tournaments__heading">Combat Con 2018: Longsword</h1>
                <TopBar buttons={buttons} />
                <div className="c-Tournament__section c-Tournament__section--gray-bg c-Tournament__section--no-wrap">
                    <div className="tournaments__table-wrap">
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
                            {participants.map( (x,i) => {
                                return (
                                        <div className="c-Tournament__section c-Tournament__section--no-wrap c-Tournament__section--row tournament__table--full-width"
                                             onClick={this.showModal.bind(this)}>
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
                        <div className="c-Tournament__section c-Tournament__section--flex-start">
                            <button type="button"
                                    className='c-Tournament-button c-Tournament-button--submit'
                                    >
                                Save Changes
                            </button>
                        </div>

                    </div>
                    <div className="tournaments__center-numbers">
                        <h3 className="tournaments__heading tournaments__heading--center">Participants</h3>
                        <h1 className="tournaments__heading tournaments__heading--center">{participants.length}</h1>
                        <h3 className="tournaments__heading tournaments__heading--center">Collected Registration Fees</h3>
                        <h1 className="tournaments__heading tournaments__heading--center">$325</h1>
                    </div>
                    <div className="c-Tournament__chart-container">
                        <canvas id="chart" height="400px" width="536px"></canvas>
                    </div>
                </div>
  
            </div>
        )
    }
}

export default MyEventView
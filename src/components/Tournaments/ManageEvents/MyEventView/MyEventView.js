import React from 'react'
import Chart from 'chart.js'

//var myChart = new Chart(ctx, {...});

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


class MyEventView extends React.Component {
    //this.props.match.params.event
    constructor() {
        super()
        this.state = {
            data: [1220, 1500, 1430, 1800, 700,1900,2300],
            data2: [1000, 1800, 1630, 1300, 1000,1800,2000],
            dates: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"]
        }
    }
    componentDidMount() {
        this.participantNumbers();
    }
    participantNumbers() {
        let ctx = document.getElementById('chart')

        let chart = new Chart(ctx, {
            type: 'line',
            data: {
            labels: this.state.dates,
            datasets: [{
              label: "New Business",
              fill: true,
              borderColor: '#edad29',
              borderWidth: 1,
              pointRadius: 2,
              backgroundColor: 'rgba(237, 128, 41, 0.2)',
              data: this.state.data,
            },
            {
              label: "Effective Business",
              fill: true,
              borderColor: '#1346a3',
              borderWidth: 1,
              pointRadius: 2,
              backgroundColor: 'rgba(19, 70, 163, 0.2)',
              data: this.state.data2,
            }]
            },
           options: {
             legend: {
               labels: {
                  boxWidth: 12
               }
             },
                scales: {
                  yAxes: [{
                      ticks: {
                        beginAtZero: true
                        /*
                        callback: function(value, index, values) {
                                  return '$' + value;
                              }
                              */
                      },
                      gridLines: {
                        display: true
                      }
                    }]
                }
            }
        });
    }
    render(){
        return(
            <div>
                <h1 className="tournaments__heading">Combat Con 2018: Longsword</h1>
                <div className="c-Tournament__section c-Tournament__section--no-wrap">
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
                            {participants.map( x => {
                                return (
                                        <div className="c-Tournament__section c-Tournament__section--no-wrap c-Tournament__section--row tournament__table--full-width">
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
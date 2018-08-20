import React from 'react'
import TournamentCard from '../accessories/TournamentCard'
import TopBar from '../accessories/TopBar';

let upcomingTournaments = [
        {
            name: "Combat Con, 2018",
            location: "Las Vegas, NV, USA",
            dates: "Aug 2nd -  Aug 5th",
            image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png",
            cost: 50
        },
        {
            name: "Combat Con, 2018",
            location: "Las Vegas, NV, USA",
            dates: "Aug 2nd -  Aug 5th",
            image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png",
            cost: 75
        }
]

class RegisterForEvent extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedEvent: {}
        }
    }
    render() {
        return(
            <div className="tournaments__main-wrap tournaments__main-wrap--bg-gray">
                {/* Flexed Panel One */}
                <div className="tournaments__left-panel">
                    <h1 className="tournaments__heading">
                        Registration
                    </h1>
                    <p className="tournaments__description-text">
                        Please fill out fields completely and accurately. In order to register, you must have a <a href="/register">sword point profile.</a>
                    </p>
                    <p className="tournaments__description-text">   
                        Profiles allow for us to keep track of your stats and tournament history. You can view your tournament information on your profile.
                    </p>
                </div>
                {/* Flexed Panel Two */}
                <div className="c-Tournament-white-bg">
                    <TopBar title="Upcoming Events" buttons={[]}/>
                    <div className="tournaments__right-info">
                        <em>Select An Event</em>
                        <div className="tournaments__flex-cards">
                            {upcomingTournaments.map((x,i) => {
                                return (<div onClick={()=>{this.setState({selectedEvent: x, selectedIndex: i})}} 
                                             className="c-Tournament-pointer">
                                             <TournamentCard card = {x}
                                                            selected={this.state.selectedIndex === i}/>
                                        </div>)
                                                    
                            })}
                        </div>

                        <div className="c-Tournament__form c-Tournament__form--top-border"
                             style={{display: this.state.selectedEvent.name !== undefined ? 'block' : 'none'}}>

                            <h2 className="tournaments__event-headings">
                                {this.state.selectedEvent.name}
                            </h2>
                            <p>
                                Registration Cost: ${this.state.selectedEvent.cost}
                            </p>
                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Full Name
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-name" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        HEMA Affiliation/Club
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-location" placeholder="If no affiliate, put 'none'" />
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Credit Card Number
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-name" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Expiration Date
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-location" placeholder="MM/YYYY" />
                                </div>
                            </div>

                            <div className="c-Tournament__section c-Tournament__section--flex-start">
                                <button type="button" className='c-Tournament-button c-Tournament-button--reset'>
                                    Reset
                                </button>
                                <button type="button" className='c-Tournament-button c-Tournament-button--submit'>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForEvent
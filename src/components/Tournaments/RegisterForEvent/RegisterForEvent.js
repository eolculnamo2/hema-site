import React from 'react'
import TournamentCard from '../accessories/TournamentCard'
import TopBar from '../accessories/TopBar';

class RegisterForEvent extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedTournament: {},
            tournaments: []
        }
    }
    componentDidMount(){
        fetch('/tournaments/get-tournaments',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
        .then(res => res.json())
        .then(data => this.setState({tournaments: data}))
    }
    register(){
        let chosenEvents = []

        let checkboxes = document.getElementsByClassName('event-checkbox');
        Array.prototype.forEach.call(checkboxes, x => {
            if(x.checked){
                chosenEvents.push(x.value)
            }
        })

        //paid option to be false when not using payments on this site. (Can be manually updated by admin on Event Dashboard)
        let payload = {
            name: document.getElementById('full-name').value,
            affiliation: document.getElementById('affiliation').value,
            events: chosenEvents,
            paid: true,
            tournamentId: this.state.selectedTournament['_id'],
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value
        }

        fetch('/tournaments/register-for-tournament',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
        .then(res => res.json())
        .then(data => {
            if(data.status){
                alert("Registration Successful")
                document.location.replace("/profile")
            }  
            else {
                alert("Registration Failed. Please contact tournament admin.")
            } 
        })
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
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                    <TopBar title="Upcoming Tournaments" buttons={[]}/>
                    <div className="tournaments__right-info">
                        <em>Select a Tournament</em>
                        <div className="tournaments__flex-cards">
                            {this.state.tournaments.map((x,i) => {
                                return (<div onClick={()=>{this.setState({selectedTournament: x, selectedIndex: i})}} 
                                             className="c-Tournament-pointer">
                                             <TournamentCard card = {x}
                                                            selected={this.state.selectedIndex === i}/>
                                        </div>)
                                                    
                            })}
                        </div>

                        <div className="c-Tournament__form c-Tournament__form--top-border"
                             style={{display: this.state.selectedTournament.name !== undefined ? 'block' : 'none'}}>

                            <h2 className="tournaments__event-headings">
                                {this.state.selectedTournament.name}
                            </h2>
                            <p>
                                Registration Cost: ${this.state.selectedTournament.cost}
                            </p>
                            <span>Select your Events</span>
                            {this.state.selectedTournament.name !== undefined ? this.state.selectedTournament.events.map( x => {
                                return(
                                    <div>
                                        <input value={x.name} className="event-checkbox" type="checkbox" />
                                        <span className="capitalize">{x.name}</span>
                                    </div>)
                            }) : null}
                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Full Name
                                    </h2>
                                    <input className="c-Tournament-input" id="full-name" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        HEMA Affiliation/Club
                                    </h2>
                                    <input className="c-Tournament-input" id="affiliation" placeholder="If no affiliate, put 'none'" />
                                </div>
                            </div>
                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Age
                                    </h2>
                                    <input className="c-Tournament-input" id="age" />
                                </div>
                            </div>
                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Gender
                                    </h2>
                                    <select id="gender">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>
                            </div>

                           {/*  <div className="c-Tournament__section">
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
                            </div> */}

                            <div className="c-Tournament__section c-Tournament__section--flex-start">
                                <button type="button" className='c-Tournament-button c-Tournament-button--reset'>
                                    Reset
                                </button>
                                <button type="button" onClick={this.register.bind(this)} className='c-Tournament-button c-Tournament-button--submit'>
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
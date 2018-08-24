import React from 'react'
import TournamentCard from '../../../accessories/TournamentCard'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'


const MyEvents = props => {
    return(
        <div className="tournament__my-event">
            <TournamentCard card={props.card} />
            <div>
                <p>
                    Events are the different competitions that will exist in your tournament.
                    For example, you may have an event for a longsword competition and a separate
                    event for sword and buckler competition all in the same tournament.
                </p>
            </div>

            <h2>
                Events
            </h2>
            <div>
                {props.events.map( x => {
                   return (<h4> {x} </h4>)
                })}
            </div>

            <div className="c-Tournament__section">
                <div>
                    <h2 className="tournaments__event-headings">
                        Add Event
                    </h2>
                    <p>
                        Event Name
                    </p>
                    <input className="c-Tournament-input" id="event-name" />
                </div>
            </div>
            <div className="c-Tournament__section c-Tournament__section--flex-start">
                <button type="button"
                        onClick={props.addEvent} 
                        className='c-Tournament-button c-Tournament-button--submit'
                        >
                    Add Event
                </button>
            </div>
        </div>
    )
}

export default MyEvents
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
                   return (<Link to={'/manage-tournaments/'+props.card['_id']+'/'+x.name}><h4 className="tournaments__event-list-item"> {x.name} </h4></Link>)
                })}
            </div>
            <div className="c-Tournament-flex-inputs">
                <div className="c-Tournament__section c-Tournament__section--add-event">
                    <div>
                        <h2 className="tournaments__event-headings">
                            Add Event
                        </h2>
                        <input placeholder="Event Name" className="c-Tournament-input" id="event-name" />
                    </div>
                </div>
                <div className="c-Tournament__section c-Tournament__section--add-event c-Tournament__section--flex-start">
                    <button type="button"
                            onClick={props.addEvent}
                            className='c-Tournament-button c-Tournament-button--submit'
                            >
                        Add Event
                    </button>
                </div>

                <div className="c-Tournament__section c-Tournament__section--add-event">
                    <div>
                        <h2 className="tournaments__event-headings">
                            Add Judge
                        </h2>
                        <input placeholder="Judge's Username" className="c-Tournament-input" id="judge-name" />
                    </div>
                </div>
                <div className="c-Tournament__section c-Tournament__section--add-event c-Tournament__section--flex-start">
                    <button type="button"
                            onClick={props.addJudge}
                            className='c-Tournament-button c-Tournament-button--submit'
                            >
                        Add Judge
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyEvents
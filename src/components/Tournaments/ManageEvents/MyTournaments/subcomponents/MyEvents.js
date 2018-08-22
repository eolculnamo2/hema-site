import React from 'react'

const MyEvents = props => {
    return(
        <div>
            <div className="c-Tournament__section">
                <p>
                    Events are the different competitions that will exist in your tournament.
                    For example, you may have an event for a longsword competition and a separate
                    event for sword and buckler competition all in the same tournament.
                </p>
            </div>

            <h2 className="tournament__my-event">
                Events
            </h2>
            <div className="tournament__my-event">
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
                        className='c-Tournament-button c-Tournament-button--submit'>
                    Add Event
                </button>
            </div>
        </div>
    )
}

export default MyEvents
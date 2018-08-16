import React from 'react'

const TournamentCard = props => {
    return(
        <div className="tournament__tournament-card">
           <h3 className="tournaments__event-headings">{props.card.name}</h3>
           <p>{props.card.location}</p>
           <div className="tournament__inner-card-flex">
                <p>{props.card.dates}</p>
                <img src={props.card.image} />
           </div>
        </div>
    )
}

export default TournamentCard
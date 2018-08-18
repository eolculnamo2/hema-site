import React from 'react'

const TournamentCard = props => {
    return(
        <div style={{background: props.selected === true ? '#c0e8b2' : 'white', transition: 'background-color .2s ease-out'}} className="tournament__tournament-card">
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
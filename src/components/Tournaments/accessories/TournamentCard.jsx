import React from 'react';

function TournamentCard(props) {
  const { card, selected } = props;
  return (
    <div
      style={{ background: selected === true ? '#c0e8b2' : 'white', transition: 'background-color .2s ease-out' }}
      className="tournament__tournament-card"
    >
      <h3 className="tournaments__event-headings">{card.name}</h3>
      <p>{card.location ? card.location : `${card.city}, ${card.state} ${card.country}`}</p>
      <div className="tournament__inner-card-flex">
        <p>{card.dates ? card.dates : `${card.startDate} - ${card.endDate}`}</p>
        {card.image && <img src={card.image} alt="card tournament" />}
      </div>
    </div>
  );
}

export default TournamentCard;

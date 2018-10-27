import React from 'react'

const FighterDetails = props => {
    return (
        <div>
            <div>
                <h1 className="c-Judges-competitor-name">
                    {props.name}
                </h1>
                <h3   className={props.team === 'blue' ? 
                 'c-Judges-club-name c-Judges-club-name--blue' :
                 'c-Judges-club-name c-Judges-club-name--red'}>
                    {props.club}
                </h3>
            </div>
            <div className={props.team === 'blue' ? 
                 'c-Judges-score c-Judges-score--blue' :
                 'c-Judges-score c-Judges-score--red'}>
                <div>{props.score}</div>
            </div>
            <div>
                <h4 className="c-Judges-penalties">Penalties: </h4>{props.penalties}
            </div>

        </div>
    )
}

export default FighterDetails
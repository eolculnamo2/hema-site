import React from 'react'
import RightInfo from './subcomponents/RightInfo'

const AboutTournaments = () => {
    return(
        <div className="tournaments__main-wrap">
            {/* Flexed Panel One */}
            <div className="tournaments__left-panel">
                <h1 className="tournaments__heading">
                    Tournaments
                </h1>
                <p className="tournaments__description-text">
                    Whether you are organizing a 
                    HEMA tournament/event or are a 
                    competitor, Sword Point’s 
                    tournaments application offers 
                    valuable real time tournament 
                    information.
                </p>
                <ul>
                    <li className="tournaments__description-listed-item">
                        Judge’s Table Interface for posting scores online and keeping tournament records
                    </li>
                    <li className="tournaments__description-listed-item">
                        HEMA competitors can view their tournament stats on their Sword Point profiles.
                    </li>
                    <li className="tournaments__description-listed-item">
                        Data visualization and dashboard interfaces make managing your tournament’s online presence simple.
                    </li>
                    <li className="tournaments__description-listed-item">
                        Build tournament rosters and manage registration to events.
                    </li>
                </ul>
                <div className="tournaments__description-button-wrap">
                    <button className="tournaments__description-button">
                        Host Event
                    </button>
                    <button className="tournaments__description-button">
                        Registration
                    </button>
                </div>
            </div>
            {/* Flexed Panel Two */}
            <div className="tournaments__right-info">
                <RightInfo />
            </div>
            
        </div>
    )
}

export default AboutTournaments
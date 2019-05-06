import React from 'react'
import RightInfo from './subcomponents/RightInfo'
import TopBar from '../accessories/TopBar';
import HemaGuy from './subcomponents/HemaGuy';

let navButtons = [
    {
        text: "Host Event",
        link: "/create-tournament"
    },
    {
        text: "Registration",
        link: "/event-registration"
    }
]

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
                <h3 className="tournaments__heading">
                    Current features
                </h3>
                <ul>
                    <li className="tournaments__description-listed-item">
                        Data visualization and dashboard interfaces make managing your tournament’s online presence simple.
                    </li>
                    <li className="tournaments__description-listed-item">
                        Build tournament rosters and manage registration to events.
                    </li>
                </ul>
                <h3 className="tournaments__heading">
                    Coming Soon
                </h3>
                <ul>
                    <li className="tournaments__description-listed-item">
                        Judge’s Table Interface for posting scores online and keeping tournament records
                    </li>
                    <li className="tournaments__description-listed-item">
                        HEMA competitors can view their tournament stats on their Sword Point profiles.
                    </li>
                </ul>
            </div>
            {/* Flexed Panel Two */}
            <div>
                <TopBar buttons={navButtons}/>
                <div className="tournaments__flex-h1-svg">
                    <h1>Welcome to Sword-Point Tournaments</h1>
                    <HemaGuy/>
                </div>
                <div className="tournaments__right-info">
                    <RightInfo />
                </div>
            </div>
        </div>
    )
}

export default AboutTournaments
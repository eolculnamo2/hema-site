import React from 'react'
import TournamentCard from '../../accessories/TournamentCard'

let activeEvents = [
    {
        name: "Coming Soon",
        location: "Coming Soon",
        dates: "Coming Soon",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png"
    }
]

let recentEvents = [
    {
        name: "Coming Soon",
        location: "Coming Soon",
        dates: "Coming Soon",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png"
    },
    {
        name: "Coming Soon",
        location: "Coming Soon",
        dates: "Coming Soon",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png"
    },
    {
        name: "Coming Soon",
        location: "Coming Soon",
        dates: "Coming Soon",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png"
    },
    {
        name: "Coming Soon",
        location: "Coming Soon",
        dates: "Coming Soon",
        image: "https://hemascorecard.com/includes/images/hemaa_logo_s.png"
    }
]

const RightInfo = () => {
    return(
        <div>
            <h2 className="tournaments__event-headings">
                Active Events
            </h2>
            <div className="tournaments__flex-cards">
                {activeEvents.map( x => {
                    return <TournamentCard card = {x}/>
                })}
            </div>
            <h2 className="tournaments__event-headings">
                Recent Events
            </h2>
            <div className="tournaments__flex-cards">
                {recentEvents.map( x => {
                    return <TournamentCard card = {x}/>
                })}
            </div>
        </div>
    )
}

export default RightInfo
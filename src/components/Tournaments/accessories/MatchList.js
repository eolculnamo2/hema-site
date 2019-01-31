import React from 'react'
import ManageLeftPanel from '../ManageEvents/ManageLeftPanel';
import TopBar from './TopBar';
import Match from '../ManageEvents/MyEventView/subcomponents/Match';

class MatchList extends React.Component {
    /* Shows List of Available matches for Live View and Judges Table.
     * Need to make sure to account for judge in multiple tournaments.
     */
    constructor() {
        super()
        this.state = {
            dummyMatches: [
                {
                    "fighter1": "Rob Bertram",
                    "fighter1Club": "ARMA",
                    "fighter2": "John Smith",
                    "fighter2Club": "HEMA Alliance"
                },
                {
                    "fighter1": "Joe",
                    "fighter1Club": "Sword Fighters School",
                    "fighter2": "Steve",
                    "fighter2Club": "Meyer's Guild"
                },
                {
                    "fighter1": "Joe",
                    "fighter1Club": "Sword Fighters School",
                    "fighter2": "Steve",
                    "fighter2Club": "Meyer's Guild"
                },
                {
                    "fighter1": "Joe",
                    "fighter1Club": "Sword Fighters School",
                    "fighter2": "Steve",
                    "fighter2Club": "Meyer's Guild"
                }
            ]
        }

        this.selectTournament = this.selectTournament.bind(this)
    }

    selectTournament(matchIndex) {
        alert(matchIndex)
    }

    render() {
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="Judge's Table" />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                    <TopBar title="Judge's Table" buttons={[]}/>
                    <div className="match-list__main-wrap">
                        <h2>Available Rounds to Judge</h2>
                        <div className="c-Tournament__matches-wrap c-Tournament__matches-wrap--flex-start">
                        {this.state.dummyMatches.map((x,i) => <Match index={i}
                                                                     info={x}
                                                                     handleClick={this.selectTournament}/> )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchList
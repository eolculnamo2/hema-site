import React from 'react'
import ManageLeftPanel from './ManageLeftPanel'
import TopBar from '../accessories/TopBar'

class CreateTournament extends React.Component {
    render(){
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="Create Tournament" />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg">
                    <TopBar title="Create Tournament" buttons={[]}/>
                        <div className="c-Tournament__form">

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Tournament Name
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-name" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Tournament Location
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-location" placeholder="city, state, country" />
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Start Date
                                    </h2>
                                    <input className="c-Tournament-input" id="start-date" placeholder="MM/DD/YYYY" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        End Date
                                    </h2>
                                    <input className="c-Tournament-input" id="end-date" placeholder="MM/DD/YYYY" />
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Use Sword Point Registration
                                    </h2>
                                    <span>Yes </span>
                                    <input className="c-Tournament-input c-Tournament-input--radio" type="radio" value={true} name="use-registration" id="use-registration" />
                                    <span>No </span>
                                    <input className="c-Tournament-input c-Tournament-input--radio" type="radio" value={false} name="use-registration" id="use-registration" />
                                    <p>
                                        Sword Point allows participants to create a sword point profile with which they can register online. If you prefer to register participants manually, click no.
                                    </p>
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Require Sword Point Registration Key
                                    </h2>
                                    <span>Yes </span>
                                    <input className="c-Tournament-input c-Tournament-input--radio" type="radio" value={true} name="use-key" id="use-key" />
                                    <span>No </span>
                                    <input className="c-Tournament-input c-Tournament-input--radio" type="radio" value={false} name="use-key" id="use-key" />
                                    <p>
                                    Registration keys are given to help you control user registration. If this option is chosen, you must provide the key to participants before registration. (i.e. you may want to provide the key only to those who have already paid registration fees.
                                    </p>
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Registration Cost (USD)
                                    </h2>
                                    <input className="c-Tournament-input" id="registration-cost" />
                                </div>
                            </div>
                            
                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Description
                                    </h2>
                                    <textarea className="c-Tournament-description" id="description" />
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Tournament Logo
                                    </h2>
                                    <input className="c-Tournament-input" id="logo" placeholder="Optional" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}

export default CreateTournament
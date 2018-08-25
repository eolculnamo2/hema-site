import React from 'react'
import ManageLeftPanel from './ManageLeftPanel'
import TopBar from '../accessories/TopBar'

class CreateTournament extends React.Component {
    submitForm(){
        let payload = {
            name: document.getElementById('tournament-name').value,
            city: document.getElementById('tournament-city').value,
            state: document.getElementById('tournament-state').value,
            country: document.getElementById('tournament-country').value,
            startDate: document.getElementById('start-date').value,
            endDate: document.getElementById('end-date').value,
            useSPRegistration: document.querySelector('input[name="use-registration"]:checked').value,
            useKey: document.querySelector('input[name="use-key"]:checked').value,
            cost: document.getElementById('registration-cost').value,
            description: document.getElementById('description').value,
            logo: document.getElementById('logo').value
        }

        fetch('/tournaments/new-tournament',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            credentials: "same-origin"
            })
        .then( res => res.json())
        .then( data => {
            alert('Tournament Created')
            this.resetForm(true);
        })
    }
    resetForm(x){
        let test = false
        
        if(!x){
             test = confirm("Are you sure you want to reset your form?")
        }

        if(test || x) {
            let els = document.getElementsByTagName('input')
            Array.prototype.forEach.call(els, x => x.value = '')

            let radios = document.getElementsByClassName('c-Tournament-input--radio')
            Array.prototype.forEach.call(radios, x => x.checked = false)

            document.getElementsByTagName('textarea')[0].value =''
        }
    }
    render(){
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="Create Tournament" />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                    <TopBar title="Create Tournament" buttons={[]}/>
                        <div className="c-Tournament__form">

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Tournament Name
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-name" />
                                </div>
                            </div>

                            <div className="c-Tournament__section">
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        City
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-city" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        State/Province/Region
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-state" />
                                </div>
                                <div>
                                    <h2 className="tournaments__event-headings">
                                        Country
                                    </h2>
                                    <input className="c-Tournament-input" id="tournament-country" />
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
                                    <input type="number" className="c-Tournament-input" id="registration-cost" />
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
                                        Tournament Logo URL
                                    </h2>
                                    <input className="c-Tournament-input" id="logo" placeholder="Optional" />
                                </div>
                            </div>

                            <div className="c-Tournament__section c-Tournament__section--flex-start">
                                <button type="button"
                                        onClick={this.resetForm.bind(this)}
                                        className='c-Tournament-button c-Tournament-button--reset'>
                                    Reset
                                </button>
                                <button type="button" 
                                        onClick={this.submitForm.bind(this)}
                                        className='c-Tournament-button c-Tournament-button--submit'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CreateTournament
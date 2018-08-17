import React from 'react'
import ManageLeftPanel from './ManageLeftPanel'

class CreateTournament extends React.Component {
    render(){
        return(
            <div className = "tournaments__main-wrap">
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="Create Tournament" />
                {/* Flexed Item 2*/}
                {/* Flexed Item 3*/}
            </div>
        )
    }
}

export default CreateTournament
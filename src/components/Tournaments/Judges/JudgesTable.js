import React from 'react'
import ManageLeftPanel from '../ManageEvents/ManageLeftPanel'
import TopBar from '../accessories/TopBar'
import ScoreView from './subcomponents/ScoreView'


class JudgesTable extends React.Component {
    render(){
        return(
            <div className = "tournaments__main-wrap tournaments__main-wrap--bg-gray"> 
                {/* Flexed Item 1*/}
                <ManageLeftPanel name="Judge's Table" />
                {/* Flexed Item 2*/}
                <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
                    <TopBar title="Judge's Table" buttons={[]}/>
                    <ScoreView />
                </div>
            </div>
        )    }
}

export default JudgesTable
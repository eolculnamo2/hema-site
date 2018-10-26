import React from 'react'
import ButtonsSection from './ScoreViewComponents/ButtonsSection'
import FighterDetails from './ScoreViewComponents/FighterDetails';

class ScoreView extends React.Component {
    render(){
        return(
            <div>
                <ButtonsSection />
                <div className="c-Judges-fighters-details-main-wrap">
                    <FighterDetails 
                        name="Joe Smith"
                        club="Sword School NYC"
                        score="0"
                        penalties="0"
                        team="blue"
                        />
                    <FighterDetails 
                        name="John Peters"
                        club="Meyer Academy"
                        score="0"
                        penalties="0"
                        team="red"
                        />
                </div>
            </div>
        )
    }
}

export default ScoreView
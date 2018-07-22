import React from 'react'

const Rule = props => {
    return(
        <div className="rule-box">
            <div>
            <h4 className="subtitle subtitle--rule">
                    {"Rule " + props.index+":"}
                </h4>
            </div>
            <div>
                {props.text}
            </div>
        </div>
    )
}

export default Rule
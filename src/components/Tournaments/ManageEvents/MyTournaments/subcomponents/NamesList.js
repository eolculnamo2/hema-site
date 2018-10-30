import React from 'react'

const NamesList = props => {
    return (
        <div className="tournaments__names-list-wrap">
            <h3>
                {props.heading}
            </h3>
            <div className="tournaments__flex-names-list">
                {props.names.map( x => {
                    return (
                        <div>{x}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default NamesList
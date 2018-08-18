import React from 'react'

const TopBar = props => {
    return (
        <div className="tournament__flex-navbar">
            <div>
                <h2 className="tournaments__event-headings tournaments__event-headings--padded">
                    {props.title}
                </h2>
            </div>
            <div>
                {props.buttons.map( x => {
                    return(<a href={x.link}><button className="tournaments__description-button" onClick={x.link}>{x.text}</button></a>)
                })}
            </div>
        </div>
    )
}

export default TopBar
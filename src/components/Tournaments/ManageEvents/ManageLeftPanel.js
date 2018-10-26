import React from 'react'
import { BrowserRouter as Router, Link, Route, withRouter, Redirect } from 'react-router-dom'

let buttons = [
    {
        link: '/create-tournament',
        name: 'Create Tournament'
    },
    {
        link: '/manage-tournaments',
        name: 'My Tournaments'
    },
    {
        link: '/judges-table',
        name: 'Judge\'s Table'
    },
    /* 
        FUTURE ADDITIONAL PANEL OPTIONS (FUTURE SPRINTS)
    {
        link: '/create-tournament',
        name: 'Edit Profile'
    },
    {
        link: '/create-tournament',
        name: 'Delete Tournament'
    } */
]

const ManageLeftPanel = props => {
    return (
        <div className="tournaments__left-panel">
            <h1 className="tournaments__heading">
                Event Manager
            </h1>
            <div className="tournaments__description-button-wrap">
                {buttons.map( x => {
                    return(<Link to={x.link}>
                                <button className={x.name === props.name ? "c-Tournament__manage-button c-Tournament__manage-button--selected" : "c-Tournament__manage-button"}>
                                    {x.name}
                                </button>
                            </Link>)
                })}
            </div>
        </div>
    )
}


export default ManageLeftPanel
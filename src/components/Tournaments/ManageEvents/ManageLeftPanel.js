import React from 'react'


let buttons = [
    {
        link: '/create-tournament',
        name: 'Create Tournament'
    },
    {
        link: '/create-tournament',
        name: 'My Tournaments'
    },
    {
        link: '/create-tournament',
        name: 'Tournament Stats'
    },
    {
        link: '/create-tournament',
        name: 'Edit Profile'
    },
    {
        link: '/create-tournament',
        name: 'Delete Tournament'
    },
    
]

const ManageLeftPanel = props => {
    return (
        <div className="tournaments__left-panel">
            <h1 className="tournaments__heading">
                Event Manager
            </h1>
            <div className="tournaments__description-button-wrap">
                {buttons.map( x => {
                    return(<button
                                className={x.name === props.name ? "c-Tournament__manage-button c-Tournament__manage-button--selected" : "c-Tournament__manage-button"}
                                onClick={x.link}>{x.name}</button>)
                })}
            </div>
        </div>
    )
}


export default ManageLeftPanel
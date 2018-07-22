import React from 'react'

const ArticleBody = props => {
    return(
        <div>
            <p>
               By: {props.author}
            </p>
            <img src={props.image} />
            <div>
                {props.body.map( x => {
                    return(<p>{x}</p>)
                })}
            </div>
        </div>
    )
}

export default ArticleBody
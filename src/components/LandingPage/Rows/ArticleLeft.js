import React from 'react';

const ArticleLeft = props => {
    return (
        <div className="article-wrap">
            <div className="image">
                <img src ={props.content.image} />
            </div>
            <div>
                <h4><a href={'/article/'+props.content.linkId}>{props.content.title}</a></h4>
                <p>{props.content.author}</p>
                <p>{props.content.preview}</p>
            </div>
            
        </div>
    )
}

export default ArticleLeft
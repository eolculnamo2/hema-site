import React from 'react'

const ArticlePreview1 = props => {
    return(
        <div className="article-preview1-wrap">
            <div className="preview-header" style={{background: props.content.color}}>
                <a href={'/article/'+props.content.linkId}>
                    {props.content.title}
                </a>
            </div>
            <div className="text-wrap">
                <p>
                    {props.content.author}
                </p>
                <p>
                    {props.content.preview}
                </p>
            </div>
        </div>
    )
}

export default ArticlePreview1
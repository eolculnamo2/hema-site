import React from 'react'

const ArticlePreview2 = props => { 
        return(
        <div className="article-preview2-wrap">
            <a href={'/article/'+props.content.url}>
                <div className="preview-header">
                    {props.content.title}
                </div>
                <div className="text-wrap">
                    <p>
                        {props.content.author}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default ArticlePreview2
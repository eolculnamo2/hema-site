import React from 'react'

const RecommendedArticles = props => {
    return(
        <div className="recommended-wrap">
            <h4 className="recommended-title">
                Recommended Articles
            </h4>
            {props.x.map( y => {
                return(
                    <div>
                        <h4>
                            <a href={'/article/'+y.linkId}>
                                {y.title}
                            </a>
                        </h4>
                        <img src={y.image} />
                    </div>
                )
            })}
        </div>
    )
}

export default RecommendedArticles
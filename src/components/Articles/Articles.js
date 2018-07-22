import React from 'react'
import ArticlesRow1 from './subcomponents/ArticlesRow1'
import ArticlePreview1 from './subcomponents/ArticlePreview1'
import ArticlePreview2 from './subcomponents/ArticlePreview2'
import homePageArticles from '../../../content/homePageFeatured'

class Articles extends React.Component {
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }
    componentWillMount(){
        fetch('/posts/get-all-articles')
        .then( res => res.json())
        .then( data => {
            this.setState({articles: data})
        })
    }
    render() {
        return(
            <div>
                <ArticlesRow1 />
                {homePageArticles.map( x => {
                    return (<ArticlePreview1 content={x}/>)
                })}
                <div className="article-preview2-main-wrap">
                    <h4 className="subtitle">
                        All Articles
                    </h4>
                    <div className="article-preview2-flexing-wrap">
                        {this.state.articles.map( x => {
                            return (<ArticlePreview2 content={x}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Articles
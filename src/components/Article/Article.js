import React from 'react'
import DocumentMeta from 'react-document-meta';
import TitleRow from './subcomponents/TitleRow'
import ArticleBody from './subcomponents/ArticleBody'
import RecommendedArticles from './subcomponents/RecommendedArticles'
import ArticleComments from './subcomponents/ArticleComments'
import rec from '../../../content/homePageFeatured'

class Article extends React.Component {
    constructor(){
        super()
        this.state = {
            currentArticle: {}
        }
        this.updateArticle = this.updateArticle.bind(this)
    }

    componentWillMount() {
        this.updateArticle()
    }

    updateArticle() {
        let payload = {id: this.props.match.params.article}

        fetch('/posts/get-article',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
            })
            .then( res => res.json())
            .then( data => this.setState({currentArticle: data}))
    }

    render() {
        if(this.state.currentArticle.body != undefined) {
            const meta = {
                title: this.state.currentArticle.title,
                description: 'An article by ' + this.state.currentArticle.author,
                meta: {
                    charset: 'utf-8',
                    name: {
                    keywords: this.state.currentArticle.title+',hema, arma, longsword, renaissance, knights, fighting, martial arts'
                    }
                }
            }    
        return (
            <DocumentMeta {...meta}>
                <TitleRow title={this.state.currentArticle.title} />
                <div className="flex-body">
                    <RecommendedArticles x={rec} />
                    <div className="article-body-wrap">
                    <ArticleBody body={this.state.currentArticle.body}
                                 image={this.state.currentArticle.imgUrl}
                                 author={this.state.currentArticle.author} />
                    <ArticleComments comments={this.state.currentArticle.comments}
                                     likes={this.state.currentArticle.likes}
                                     id={this.props.match.params.article}
                                     update={this.updateArticle}  />
                    </div>
                </div>    
            </DocumentMeta>
        )
        }
        else{
            return (<div></div>)
        }
    }
}

export default Article
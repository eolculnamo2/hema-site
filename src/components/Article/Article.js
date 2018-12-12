import React from 'react'
import { Helmet } from 'react-helmet'
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
        let payload = {url: this.props.match.params.article}

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
        return (
            <div>
                <Helmet>
                    <title>{this.state.currentArticle.title}</title>
                    <meta name="description" content={'An article by ' + this.state.currentArticle.author} />
                    <link rel="icon" href="https://image.ibb.co/c76tRy/head_icon.png" sizes="16x16 32x32" type="image/png" /> 
                    <meta name="keywords" content={this.state.currentArticle.title+',hema, arma, longsword, renaissance, knights, fighting, martial arts'} />
                </Helmet>
                <TitleRow title={this.state.currentArticle.title} />
                <div className="flex-body">
                    <RecommendedArticles x={rec} />
                    <div className="article-body-wrap">
                    <ArticleBody
                                 title={this.state.currentArticle.title} 
                                 body={this.state.currentArticle.body}
                                 image={this.state.currentArticle.imgUrl}
                                 author={this.state.currentArticle.author}
                                 username={this.state.currentArticle.username}
                                 type={this.state.currentArticle.type} />
                    <ArticleComments comments={this.state.currentArticle.comments}
                                     likes={this.state.currentArticle.likes}
                                     id={this.props.match.params.article}
                                     update={this.updateArticle}  />
                    </div>
                </div>    
            </div>
        )
        }
        else{
            return (<div><div id="the-main-article-wrap"></div></div>)
        }
    }
}

export default Article
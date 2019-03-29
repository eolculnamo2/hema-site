/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import TitleRow from './subcomponents/TitleRow';
import ArticleBody from './subcomponents/ArticleBody';
import RecommendedArticles from './subcomponents/RecommendedArticles';
import ArticleComments from './subcomponents/ArticleComments';
import rec from '../../../content/homePageFeatured';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      currentArticle: {},
    };
  }

  componentWillMount() {
    this.updateArticle();
  }

  updateArticle = () => {
    const { match } = this.props;
    const payload = { url: match.params.article };

    fetch('/posts/get-article', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => this.setState({ currentArticle: data }));
  }

  render() {
    const {
      title, author, body, url, imgUrl, username, type, comments, likes,
    // eslint-disable-next-line react/destructuring-assignment
    } = this.state.currentArticle;

    const {
      match,
    } = this.props;

    if (body) {
      return (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={`An article by ${author}`} />
            <meta name="keywords" content={`${title},hema, arma, longsword, renaissance, knights, fighting, martial arts`} />
            { /* <script className='structured-data-list' type="application/ld+json">
                  {this.state.currentArticle.structuredData}
                 </script> */ }
            <link rel="canonical" href={`https://www.sword-point.com/article/${url}`} />
          </Helmet>
          <TitleRow title={title} />
          <div className="flex-body">
            <RecommendedArticles x={rec} />
            <div className="article-body-wrap">
              <ArticleBody
                title={title}
                body={body}
                image={imgUrl}
                author={author}
                username={username}
                type={type}
              />
              <ArticleComments
                comments={comments}
                likes={likes}
                id={match.params.article}
                update={this.updateArticle}
              />
            </div>
          </div>
        </>
      );
    }
    return (<><div id="the-main-article-wrap" /></>);
  }
}

Article.defaultProps = {
  match: {},
};

Article.propTypes = {
  match: PropTypes.object,
};

export default Article;

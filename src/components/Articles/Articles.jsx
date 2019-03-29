import React from 'react';
import ArticlesRow1 from './subcomponents/ArticlesRow1';
import ArticlePreview1 from './subcomponents/ArticlePreview1';
import ArticlePreview2 from './subcomponents/ArticlePreview2';
import homePageArticles from '../../../content/homePageFeatured';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    fetch('/posts/get-all-articles', {
      method: 'POST',
      body: null,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then(data => this.setState({ articles: data }));
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <ArticlesRow1 />
        {homePageArticles.map(x => <ArticlePreview1 content={x} />)}
        <div className="article-preview2-main-wrap">
          <h4 className="subtitle">
            All Articles
          </h4>
          <div className="article-preview2-flexing-wrap">
            {articles.map(x => <ArticlePreview2 content={x} />)}
          </div>
        </div>
      </>
    );
  }
}

export default Articles;

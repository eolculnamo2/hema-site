import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreview2 = (props) => {
  const { author, title, url } = props;
  return (
    <div className="article-preview2-wrap">
      <a href={`/article/${url}`}>
        <div className="preview-header">
          {title}
        </div>
        <div className="text-wrap">
          <p>{author}</p>
        </div>
      </a>
    </div>
  );
};

ArticlePreview2.defaultProps = {
  author: '',
  title: '',
  url: '',
};

ArticlePreview2.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default ArticlePreview2;

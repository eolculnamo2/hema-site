import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreview2 = (props) => {
  const { content } = props;
  return (
    <div className="article-preview2-wrap">
      <a href={`/article/${content.url}`}>
        <div className="preview-header">
          {content.title}
        </div>
        <div className="text-wrap">
          <p>{content.author}</p>
        </div>
      </a>
    </div>
  );
};

ArticlePreview2.defaultProps = {
  content: {},
};

ArticlePreview2.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object,
};

export default ArticlePreview2;

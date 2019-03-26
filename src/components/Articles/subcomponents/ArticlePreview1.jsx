/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const ArticlePreview1 = (props) => {
  const { content } = props;
  return (
    <div className="article-preview1-wrap">
      <div className="preview-header" style={{ background: content.color }}>
        <a href={`/article/${content.linkId}`}>{content.title}</a>
      </div>
      <div className="text-wrap">
        <p>{content.author}</p>
        <p>{content.preview}</p>
      </div>
    </div>
  );
};

ArticlePreview1.defaultProps = {
  content: {},
};

ArticlePreview1.propTypes = {
  content: PropTypes.object,
};

export default ArticlePreview1;

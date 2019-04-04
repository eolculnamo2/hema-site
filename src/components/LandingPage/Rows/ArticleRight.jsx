import React from 'react';
import PropTypes from 'prop-types';

const ArticleRight = (props) => {
  const { content } = props;
  return (
    <div className="article-wrap article-wrap__right">
      <div>
        <h4><a href={`/article/${content.linkId}`}>{content.title}</a></h4>
        <p>{content.author}</p>
        <p>{content.preview}</p>
      </div>
      <div className="image">
        <img src={content.image} alt={content.title} />
      </div>
    </div>
  );
};

ArticleRight.defaultProps = {
  content: {},
};

ArticleRight.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object,
};

export default ArticleRight;

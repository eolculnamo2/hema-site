import React from 'react';
import PropTypes from 'prop-types';

const ArticleLeft = (props) => {
  const { content } = props;
  return (
    <div className="article-wrap">
      <div className="image">
        <img src={content.image} alt={content.title} />
      </div>
      <div>
        <h4><a href={`/article/${content.linkId}`}>{content.title}</a></h4>
        <p>{content.author}</p>
        <p>{content.preview}</p>
      </div>
    </div>
  );
};

ArticleLeft.defaultProps = {
  content: {},
};

ArticleLeft.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object,
};
export default ArticleLeft;

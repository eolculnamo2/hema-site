import React from 'react';
import PropTypes from 'prop-types';

const RecommendedArticles = (props) => {
  const { x } = props;
  return (
    <div className="recommended-wrap">
      <h4 className="recommended-title">
          Recommended Articles
      </h4>
      {x.map(y => (
        <>
          <h4>
            <a href={`/article/${y.linkId}`}>
              {y.title}
            </a>
          </h4>
          <img src={y.image} alt={y.title} />
        </>
      ))}
    </div>
  );
};

RecommendedArticles.defaultProps = {
  x: [],
};

RecommendedArticles.propTypes = {
  x: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.string, PropTypes.string])),
};

export default RecommendedArticles;

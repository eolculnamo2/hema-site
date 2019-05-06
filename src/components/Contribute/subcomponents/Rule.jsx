import React from 'react';
import PropTypes from 'prop-types';

const Rule = (props) => {
  const { index, text } = props;
  return (
    <div className="rule-box">
      <div>
        <h4 className="subtitle subtitle--rule">{`Rule ${index}:`}</h4>
      </div>
      <div>
        {text}
      </div>
    </div>
  );
};

Rule.defaultProps = {
  index: '',
  text: '',
};

Rule.propTypes = {
  index: PropTypes.string,
  text: PropTypes.string,
};

export default Rule;

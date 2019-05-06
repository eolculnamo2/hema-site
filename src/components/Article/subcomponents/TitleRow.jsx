import React from 'react';
import PropTypes from 'prop-types';

const TitleRow = (props) => {
  const { title } = props;
  return (
    <>
      <div className="row1-wrapper">
        <div>
          <h3 className="title">Sword Point</h3>
          <p>Rediscovering the Martial Arts of Renaissance Europe</p>
        </div>
        <div className="random-quote">
          <p>The bound may flee whither he chooses, but of this you should be</p>
          <p>admonished. Wherever the Bound flees, you should follow him.</p>
          <p>I33</p>
        </div>
      </div>
      <h3 className="title title--article">{title}</h3>
    </>
  );
};

TitleRow.defaultProps = {
  title: '',
};

TitleRow.propTypes = {
  title: PropTypes.string,
};

export default TitleRow;

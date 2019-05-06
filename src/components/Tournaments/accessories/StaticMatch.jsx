/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

function StaticMatch(props) {
  const { index, info } = props;
  return (
    <div className="c-Tournament__card-wrap">
      <h2 className="c-Tournament__card-round">Round {index + 1}</h2>
      <div className="c-Tournament__card-flex">
        <div>
          <h3>{info.fighter1}</h3>
          <em>{info.fighter1Club}</em>
        </div>
        <div>
          <h3>{info.fighter2}</h3>
          <em>{info.fighter2Club}</em>
        </div>
      </div>
    </div>
  );
}

export default StaticMatch;

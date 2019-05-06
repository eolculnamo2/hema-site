import React from 'react';

const ButtonsSection = props => (
  <div className="c-Judges-button-main-wrap">
    <div>
      {/* Start Blue */}
      <div>
        <button onClick={() => {props.changeScore('blue',1)}} type="button" className="c-Judges-button c-Judges-button--blue">
          +1
        </button>
        <button onClick={() => {props.changeScore('blue',2)}} type="button" className="c-Judges-button c-Judges-button--blue">
          +2
        </button>
        <button onClick={() => {props.changeScore('blue',3)}} type="button" className="c-Judges-button c-Judges-button--blue">
          +3
        </button>
      </div>
      <div>
        <button onClick={() => {props.changeScore('blue',-1)}} type="button" className="c-Judges-button c-Judges-button--blue">
          -1
        </button>
        <button onClick={() => {props.changeScore('blue',-2)}} type="button" className="c-Judges-button c-Judges-button--blue">
          -2
        </button>
        <button onClick={() => {props.changeScore('blue',-3)}} type="button" className="c-Judges-button c-Judges-button--blue">
          -3
        </button>
      </div>
      <div>
        <button onClick={() => {props.changePenalty('blue',1)}} type="button" className="c-Judges-button c-Judges-button--blue">
          +PENALTY
        </button>
        <button onClick={() => {props.changePenalty('blue',-1)}} type="button" className="c-Judges-button c-Judges-button--blue">
          -PENALTY
        </button>
      </div>
    </div>
    {/* Start Red*/}
    <div>
      <div>
        <button onClick={() => {props.changeScore('red',1)}} type="button" className="c-Judges-button c-Judges-button--red">
          +1
        </button>
        <button onClick={() => {props.changeScore('red',2)}} type="button" className="c-Judges-button c-Judges-button--red">
          +2
        </button>
        <button onClick={() => {props.changeScore('red',3)}} type="button" className="c-Judges-button c-Judges-button--red">
          +3
        </button>
      </div>
      <div>
        <button onClick={() => {props.changeScore('red',-1)}} type="button" className="c-Judges-button c-Judges-button--red">
          -1
        </button>
        <button onClick={() => {props.changeScore('red',-2)}} type="button" className="c-Judges-button c-Judges-button--red">
          -2
        </button>
        <button onClick={() => {props.changeScore('red',-3)}} type="button" className="c-Judges-button c-Judges-button--red">
          -3
        </button>
      </div>
      <div className="c-Judge-buttons-flex-end">
        <button onClick={() => {props.changePenalty('red',1)}} type="button" className="c-Judges-button c-Judges-button--red">
          +PENALTY
        </button>
        <button onClick={() => {props.changePenalty('red',-1)}} type="button" className="c-Judges-button c-Judges-button--red">
          -PENALTY
        </button>
      </div>
    </div>
  </div>
);

export default ButtonsSection;

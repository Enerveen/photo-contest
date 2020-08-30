import React from 'react';

const ScoreElem = ({ i, prop }) => {
  return (
    <div className='score-elem'>
      <span>
        <b>{i + 1}.</b> {prop.fullName.replace(/_/g, ' ')}
      </span>
      <div>
        <div className='score-elem-meter'>
          <span>{prop.score}</span>
        </div>
        <img src={prop.link} alt='' />
      </div>
    </div>
  );
};

export default ScoreElem;

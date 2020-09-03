import React from 'react';

const ScoreElem = ({ i, prop }) => {
  return (
    <div className='score-elem'>
      <span>
        <b>{i + 1}.</b> <a href={`https://vk.com/id${prop.linkVk}`}>{prop.fullName.replace(/_/g, ' ')}</a>
      </span>
      <div>
        <div className='score-elem-meter'>
          <span>{prop.score}</span>
        </div>
        <a href={prop.link}>
          <img src={prop.link} alt='' />
        </a>
      </div>
    </div>
  );
};

export default ScoreElem;

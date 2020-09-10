import React from 'react';

const ScoreElem = ({ i, prop }) => {
  return (
    <div className='score-elem'>
      <span>
        <b>{i + 1}.</b>{' '}
        <a target='_blank' rel='noopener noreferrer' href={`https://vk.com/id${prop.linkVk}`}>
          {prop.fullName.replace(/_/g, ' ')}
        </a>
      </span>
        <div className='score-elem-meter'>
          <span>{prop.score}</span>
          <a href={prop.link} target='_blank' rel='noopener noreferrer'>
          <img src={prop.link} alt='' />
        </a>
      </div>
    </div>
  );
};

export default ScoreElem;

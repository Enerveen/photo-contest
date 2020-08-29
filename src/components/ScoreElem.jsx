import React from 'react';
import ph1 from '../img/photo1.jpg';

const ScoreElem = () => {
  return (
    <div class='score-elem'>
      <span>1. Yuliy Chernyavsky</span>
      <div>
        <div class='score-elem-meter'>
          <span>120</span>
        </div>
        <img src={ph1} alt='' />
      </div>
    </div>
  );
};

export default ScoreElem;

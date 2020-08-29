import React from 'react';
import './scoreboard.css';
import ScoreElem from './ScoreElem';

const Scoreboard = () => {
  return (
    <div class='scoreboard'>
      <h1>Scoreboard</h1>
      <main>
        <ScoreElem />
        <ScoreElem />
        <ScoreElem />
        <ScoreElem />
        <ScoreElem />
        <ScoreElem />
      </main>
    </div>
  );
};

export default Scoreboard;

import React, { useEffect } from 'react';
import './scoreboard.css';
import ScoreElem from './ScoreElem';
import Loader from './Loader';

function Scoreboard() {
  const [scElems, setScElems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(process.env.REACT_APP_ADDR + '/score')
      .then((res) => res.json())
      .then((res) => {
        setScElems(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className='scoreboard'>
      <h1>Топ-50</h1>
      <div className='alert'>
        <h2>Внимание!</h2>
        <p>По техническим причинам таблица лидеров заморожена в состоянии на 05.09.20 19:45</p>
      </div>
      <main>
        {loading && <Loader />}
        {scElems.map((item, index) => (
          <ScoreElem key={index} i={index} prop={item} />
        ))}
      </main>
    </div>
  );
}

export default Scoreboard;

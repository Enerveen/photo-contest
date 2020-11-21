import React, { useEffect } from 'react';
import './scoreboard.css';
import ScoreElem from './ScoreElem';
import Loader from './Loader';

function Scoreboard() {
  const [scElems, setScElems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    fetch(process.env.REACT_APP_ADDR + 'score')
      .then((res) => res.json())
      .then((res) => {
        setScElems(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className='scoreboard'>
      <h1>Топ-50</h1>
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

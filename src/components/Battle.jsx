import React, { useEffect } from 'react';
import './battle.css';
import vs from '../img/vs.png';
const Battle = () => {
  const [battle, setBattle] = React.useState([
    {
      id: '',
      link: '',
      fullName: '',
    },
    {
      id: '',
      link: '',
      fullName: '',
    },
  ]);
  useEffect(() => initGirls(), []);
  function initGirls(event) {
    /*if (event) {
      let fetchData = event.target.id === 'image1' ? globalData[0].id : globalData[1].id;
      fetch(process.env.REACT_APP_ADDR, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ personId: fetchData }),
      });
    } */

    document.getElementById('image1').src = '';
    document.getElementById('image2').src = '';

    fetch(process.env.REACT_APP_ADDR)
      .then((data) => data.json())
      .then((data) => round(data))
      .catch((err) => console.error(err));

    function round(data) {
      setBattle(data);
      console.log(data);
    }
  }

  return (
    <div className='battle'>
      <img src={vs} alt='' className='vs' />
      <section className='left'>
        <img src={battle[0].link} alt={battle[0].fullName} id='image1' onClick={initGirls} />
        <span id='name1'>{battle[0].fullName.replace(/_/g, ' ')}</span>
      </section>
      <section className='right'>
        <img src={battle[1].link} alt={battle[1].fullName} id='image2' onClick={initGirls} />
        <span id='name2'>{battle[1].fullName.replace(/_/g, ' ')}</span>
      </section>
    </div>
  );
};

export default Battle;

import React, { useEffect } from 'react';
import './battle.css';
import vs from '../img/vs.png';
const Battle = () => {
  let globalData = [];
  useEffect(() => initGirls());
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
      globalData = data;
      document.getElementById('image1').src = data[0].link;
      document.getElementById('image1').alt = data[0].fullName;
      document.getElementById('image2').src = data[1].link;
      document.getElementById('image2').alt = data[1].fullName;
      document.getElementById('name1').innerHTML = data[0].fullName.replace(/_/g, ' ');
      document.getElementById('name2').innerHTML = data[1].fullName.replace(/_/g, ' ');
    }
  }

  return (
    <div className='battle'>
      <img src={vs} alt='' className='vs' />
      <section className='left'>
        <img src='' alt='' id='image1' onClick={initGirls} />
        <span id='name1'></span>
      </section>
      <section className='right'>
        <img src='' alt='' id='image2' onClick={initGirls} />
        <span id='name2'></span>
      </section>
    </div>
  );
};

export default Battle;

import React, { useEffect } from 'react';
import './battle.css';
import vs from '../img/vs.png';
import ph1 from '../img/photo1.jpg';
const Battle = () => {
  useEffect(() => initGirls());
  function initGirls(event) {
    if (event) {
      let addr = 'https://fathomless-everglades-09463.herokuapp.com/battle/' + event.target.alt;
      fetch(addr, { method: 'PATCH' });
      console.log(event.target.alt);
    }

    fetch('https://fathomless-everglades-09463.herokuapp.com/battle')
      .then((data) => data.json())
      .then((data) => round(data))
      .catch((err) => console.error(err));

    function round(data) {
      console.log(data);
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
      <img src={vs} alt='' />
      <section className='left'>
        <img src={ph1} alt='' id='image1' onClick={initGirls} />
        <span id='name1'>Govno Mocha</span>
      </section>
      <section className='right'>
        <img src={ph1} alt='' id='image2' onClick={initGirls} />
        <span id='name2'>Mocha Govno</span>
      </section>
    </div>
  );
};

export default Battle;

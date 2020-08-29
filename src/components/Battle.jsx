import React from 'react';
import './battle.css';
import ph1 from '../img/photo1.jpg';
import ph2 from '../img/photo2.JPG';
import vs from '../img/vs.png';
const Battle = () => {
  return (
    <div class='battle'>
      <img src={vs} alt='' />
      <section className='left'>
        <img src={ph1} alt='' id='image1' />
        <span id='name1'>Govno Mocha</span>
      </section>
      <section className='right'>
        <img src={ph2} alt='' id='image2' />
        <span id='name2'>Mocha Govno</span>
      </section>
    </div>
  );
};

export default Battle;

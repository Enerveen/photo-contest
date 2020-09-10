import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  function toggleMenu() {
    document.querySelector('.toggle').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    if (document.querySelector('.vs')) {
      document.querySelector('.vs').classList.toggle('invisible');
    }
  }

  return (
    <nav>
      <div className='toggle' onClick={() => toggleMenu()}></div>
      <div className='menu'>
        <NavLink className='link' to='/' onClick={() => toggleMenu()}>
          БИТВА
        </NavLink>
        <NavLink className='link' to='/scoreboard' onClick={() => toggleMenu()}>
          ТАБЛИЦА ЛИДЕРОВ
        </NavLink>
        <NavLink className='link' to='/info' onClick={() => toggleMenu()}>
          ИНФОРМАЦИЯ
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

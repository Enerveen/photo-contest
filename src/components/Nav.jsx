import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <NavLink className='link' to='/'>
        БИТВА
      </NavLink>
      <NavLink className='link' to='/scoreboard'>
        ТАБЛИЦА ЛИДЕРОВ
      </NavLink>
      <NavLink className='link' to='/info'>
        ИНФОРМАЦИЯ
      </NavLink>
    </nav>
  );
};

export default Nav;

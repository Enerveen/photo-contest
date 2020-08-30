import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <NavLink className='link' to='/'>
        BATTLE
      </NavLink>
      <NavLink className='link' to='/scoreboard'>
        SCOREBOARD
      </NavLink>
      <NavLink className='link' to='/info'>
        INFORMATION
      </NavLink>
    </nav>
  );
};

export default Nav;

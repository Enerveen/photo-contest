import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <NavLink className='link' to='/'>
        BATTLE
      </NavLink>
      <NavLink className='link' to='/scoreboard'>
        SCOREBOARD
      </NavLink>
      <NavLink className='link' to='/info'>
        INFORMATION
      </NavLink>
    </footer>
  );
};

export default Footer;

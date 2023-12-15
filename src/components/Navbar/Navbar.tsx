import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { S } from './Navbar.module'

export const Navbar = () => {
  return (
    <S.NavigationStyled>
      <ul>
        <li><NavLink to="/profile" activeClassName={'active'}>Profile</NavLink></li>
        <li><NavLink to="/messages" activeClassName={'active'}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={'active'}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={'active'}>Music</NavLink></li>
        <li><NavLink to="/settings" activeClassName={'active'}>Settings</NavLink></li>
      </ul>
    </S.NavigationStyled>
  );
};



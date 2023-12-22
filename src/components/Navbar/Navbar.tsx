import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { VavbarFriendsType } from '../../redux/state';
import { Friends } from './Friends/Friends';
import { S } from './Navbar.module'


type NavbarType = {
  navbarFriends: VavbarFriendsType,
}

export const Navbar = (props: NavbarType) => {
  return (
    <S.NavigationStyled>
      <ul>
        <li><NavLink to="/profile" activeClassName={'active'}>Profile</NavLink></li>
        <li><NavLink to="/messages" activeClassName={'active'}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={'active'}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={'active'}>Music</NavLink></li>
        <li><NavLink to="/settings" activeClassName={'active'}>Settings</NavLink></li>
      </ul>
      <Friends navbarFriends={props.navbarFriends}/>
    </S.NavigationStyled>
  );
};



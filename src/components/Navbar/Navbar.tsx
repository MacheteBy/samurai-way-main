import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavigationStyled>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </NavigationStyled>
    );
};

export default Navbar;



const NavigationStyled = styled.nav`
grid-area: nav;
  background-color: #beca0e;
`
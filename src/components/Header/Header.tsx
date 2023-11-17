import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyled>
          <img src="https://w7.pngwing.com/pngs/249/479/png-transparent-mv-realty-real-estate-music-video-estate-agent-logo-others-blue-angle-text.png" alt="logo" />
        </HeaderStyled>
    );
};

export default Header;


const HeaderStyled = styled.header`
grid-area: header;
  img{
    width: 100px;
  }
  background-color: green;
`
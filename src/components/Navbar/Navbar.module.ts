import styled from 'styled-components';

const NavigationStyled = styled.nav`
grid-area: nav;
background-color: #beca0e;

    & ul {
        list-style-type: none;
    }

    & a {
        color: green;
        text-decoration: none;
    }

    & .active {
        color: #c50000;
    }
`

export const S = {
    NavigationStyled
}
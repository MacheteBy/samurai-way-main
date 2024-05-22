import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppStateType } from '../../redux/redux-store';
import { initialStateType, setLogOutTC } from '../../redux/auth-reducer';
import { selectorAuth } from '../../redux/auth-selector';



const Header = () => {


  const auth = useSelector<AppStateType, initialStateType>(selectorAuth)
  const dispatch = useDispatch()


  const onClickHandler = () => {
    dispatch(setLogOutTC())
  }

  return (
    <HeaderStyled>
      <img src="https://w7.pngwing.com/pngs/249/479/png-transparent-mv-realty-real-estate-music-video-estate-agent-logo-others-blue-angle-text.png" alt="logo" />
      <Auth><NavLink to={'/login'}>LOGIN</NavLink>{auth.isInited ? auth.login : 'false'}</Auth>
      {auth.isInited && <button onClick={onClickHandler}>logOut</button>}
    </HeaderStyled>
  );
};

export default Header;


const HeaderStyled = styled.header`
grid-area: header;
display: flex;
flex-direction: row;
justify-content: space-between;
  img{
    width: 100px;
  }
  background-color: green;
`

const Auth = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  font-size: 30px;
  color: white;
`
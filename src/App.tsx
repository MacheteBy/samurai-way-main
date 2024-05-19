import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Navbar } from './components/Navbar/Navbar';
import Users from './components/Users/Users';
import { useDispatch } from 'react-redux';
import { setUserDataTC } from './redux/auth-reducer';
import { useEffect } from 'react';
import Login from './components/Login/Login';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserDataTC())
  }, [dispatch])



  return (
    <BrowserRouter>
      <div className="App">
        <GridWrapper>
          <Header />
          <Navbar />
          <div>
            <Route path='/messages' render={() => <Dialogs />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/users/' component={Users} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' component={Login} />
          </div>
        </GridWrapper>
      </div>
    </BrowserRouter>

  );
}

export default App;


const GridWrapper = styled.div`
display: grid;
grid-template-areas: 
"header header"
"nav main";
grid-template-columns: 1fr 11fr;
grid-template-rows: 2fr 10fr;
grid-gap: 10px;
background-color: #3f3f3f89;
`







import React from 'react';
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
import { dispatchType, RootStateType } from './redux/state';



export type PropsType = {
  state: RootStateType,
  dispatch: (action: dispatchType) => void;
}


function App(props:PropsType) {
  return (
    <BrowserRouter>
      <div className="App">
        <GridWrapper>
          <Header />
          <Navbar navbarFriends={props.state.navbarFriends}/>
          <div>
            <Route path='/messages' render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path='/profile' render={() => <Profile  postPage={props.state.postPage} dispatch={props.dispatch}/>} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
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
`







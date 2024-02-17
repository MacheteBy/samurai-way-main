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



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GridWrapper>
          <Header />
          <Navbar />
          <div>
            <Route path='/messages' render={() => <Dialogs/>} />
            <Route path='/profile' render={() => <Profile/>} />
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







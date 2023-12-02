import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';


function App() {
  return (
    <div className="App">
      <GridWrapper>
        <Header />
        <Navbar />
        <Profile />
        <Dialogs/>
      </GridWrapper>

    </div>
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







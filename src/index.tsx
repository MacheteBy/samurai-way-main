import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'


// let dialogs = [
//   { id: 1, name: 'Dima' },
//   { id: 2, name: 'Vika' },
//   { id: 3, name: 'Alina' },
//   { id: 4, name: 'Vasia' },
//   { id: 5, name: 'Masha' },
// ]

// let messages = [
//   { id: 1, message: 'Lorem ipsum dolor sit amet.' },
//   { id: 2, message: 'Lorem ipsum dolor sit amet consectetur' },
//   { id: 3, message: 'Lorem ipsum dolor sit amet consectetur' },
//   { id: 4, message: 'Lorem ipsum dolor sit.' },
// ]




ReactDOM.render(
  <App
  state={state} />
  ,
  document.getElementById('root')
);
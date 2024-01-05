import React from 'react';
import './index.css';
import state, { subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, RootStateType } from './redux/state';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={state} addPost={addPost} />
        ,
        document.getElementById('root')
    );
}




rerenderEntireTree();

subscribe(rerenderEntireTree);
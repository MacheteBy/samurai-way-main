import React from 'react';
import './index.css';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { addPost, RootStateType } from './redux/state';


const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()} addPost={store.addPost} />
        ,
        document.getElementById('root')
    );
}




rerenderEntireTree();

store.subscribe(rerenderEntireTree);
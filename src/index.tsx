import './index.css';
import { store } from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';


// const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App /> 
        </Provider>
        ,
        document.getElementById('root')
    );
// }




// rerenderEntireTree();

// store.subscribe(rerenderEntireTree);
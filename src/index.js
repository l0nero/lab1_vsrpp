import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import { createStore } from 'redux';
import userPageReducer from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(userPageReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));




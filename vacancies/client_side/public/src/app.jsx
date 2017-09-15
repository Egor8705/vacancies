import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'; 

import VacancyBoard from './main_board';
import reducer from '../reducers';

const store = createStore(
        reducer,
        compose(applyMiddleware(thunk)));

ReactDOM.render(
        <Provider store = {store}>
           <VacancyBoard />
        </Provider>,
        document.getElementById('mainDiv')
);
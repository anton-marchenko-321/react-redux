import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware,  createStore} from "redux";
import {Provider} from 'react-redux'
import {postsReducer} from "./redux/postsReducer";
import createSagaMiddleware from "redux-saga";
import {fetchUserWorker} from "./saga/postsSaga";

const sagaMiddleware = createSagaMiddleware()
const arg = applyMiddleware(sagaMiddleware)

const store = createStore(postsReducer, arg)
//     , compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
export default store;
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(
    app, document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

sagaMiddleware.run(fetchUserWorker)

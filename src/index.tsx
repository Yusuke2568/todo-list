import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import App from './App';
import * as serviceWorker from './serviceWorker';

// redux-persist を使って、store をlocalstorageで管理する様にする
// だからここでは reducer を importしない
import TodosReducer from './reducer';
// import { createStore } from 'redux';
// import store, { persistor } from './configureStore';

// redux-persist でlocalstorageに保存した store を使うため、ここでcreateStoreはしない
// const store = createStore(TodosReducer);

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(TodosReducer, applyMiddleware(sagaMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
sagaMiddleWare.run(rootSaga);

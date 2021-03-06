import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import "./App.scss";
import App from './App';
import { configureStore } from "./Redux/store";
import reportWebVitals from './reportWebVitals';

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}></PersistGate>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

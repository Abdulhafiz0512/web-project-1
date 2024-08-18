import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
  
);




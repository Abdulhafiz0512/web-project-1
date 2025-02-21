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
<<<<<<< HEAD



=======
>>>>>>> 0ed3ed9b4096a3c00e2dae16dc4b50ed1a48f0b8

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './store/store'; // Import your Redux store
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router> {/* Wrap App inside Router */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);

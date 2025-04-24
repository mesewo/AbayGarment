import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider
import store from './store/store'; // Import your Redux store
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router> {/* Wrap App inside Router */}
      <ErrorBoundary> {/* Wrap App inside ErrorBoundary */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ErrorBoundary>
    </Router>
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './app-router';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppRouter />
</React.StrictMode>,
);


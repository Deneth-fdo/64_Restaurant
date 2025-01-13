// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

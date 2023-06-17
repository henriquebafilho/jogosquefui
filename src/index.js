import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppFirestore } from './services/firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppFirestore />
  </React.StrictMode>
);
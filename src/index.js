import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
// import { JogosFirestore } from './services/firebaseConfig';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <JogosFirestore /> */}
  </React.StrictMode>
);
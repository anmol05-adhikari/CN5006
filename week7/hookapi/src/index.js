import EmojeeCounter from './EmojeeCounter';
import React from 'react';
import ReactDOM from 'react-dom/client';   // <-- IMPORTANT
import './index.css';
import App from './App';
import Hook_ControlledButtonState from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love' />
    <EmojeeCounter pic='sad' />
    <EmojeeCounter pic='Like' />
  </React.StrictMode>
);

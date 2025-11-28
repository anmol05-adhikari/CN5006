import ToggleMode from './ToggleModeComponent';
import FacebookEmojiCounter from './Facebookemoji';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <ToggleMode />
  </React.Fragment>
);

reportWebVitals();

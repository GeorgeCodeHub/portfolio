import React from 'react';
import ReactDOM from 'react-dom';
import Palette from './utils/Palette';
import App from './App';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Palette>
      <App />
    </Palette>
  </React.StrictMode>
,
  document.getElementById('root')
);

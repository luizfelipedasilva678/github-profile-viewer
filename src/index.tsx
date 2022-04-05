import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { GlobalStyle } from './global-style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

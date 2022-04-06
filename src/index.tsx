import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { GlobalStyle } from './global-style';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

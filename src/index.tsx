import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as dotenv from 'dotenv';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

dotenv.config();
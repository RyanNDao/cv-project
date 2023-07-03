import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassApp from './components/class/App';
import FunctionApp from './components/functional/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FunctionApp/>
  </React.StrictMode>
);

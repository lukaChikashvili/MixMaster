import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MeshProvider from './context/meshContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MeshProvider>
    <App />
    </MeshProvider>
);



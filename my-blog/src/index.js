import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ArticlesProvider} from './hooks/useContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArticlesProvider> 
      <App />
    </ArticlesProvider>
  </React.StrictMode>
);


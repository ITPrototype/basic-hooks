import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

export const HiContext = createContext()
const word = 'hello context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HiContext.Provider value={word}>
            <App />
      </HiContext.Provider>
);


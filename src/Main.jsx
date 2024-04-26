import React from 'react';
import './Style.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const appContainer = document.getElementById("app");
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

console.log(appContainer);

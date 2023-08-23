import React from 'react';
import ReactDOM from 'react-dom/client';
import { initUserList } from './data/userRepo.js'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/Ultilities/ScrollToTop";

// init first time user into the system
initUserList();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>
);
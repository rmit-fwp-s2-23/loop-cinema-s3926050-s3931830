import React from 'react';
import ReactDOM from 'react-dom/client';
import { initUserList } from './data/userRepo.js'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/Ultilities/ScrollToTop";
import { initMovieList } from './data/movieRepo.js';
import { initAudienceReviewList } from './data/reviewRepo.js';

// init first time user into the system
initUserList();
initMovieList();
initAudienceReviewList();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>
);
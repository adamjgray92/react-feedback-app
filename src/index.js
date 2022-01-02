import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

import './index.css';

render(
  <React.StrictMode>
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

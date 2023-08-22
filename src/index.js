import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Gallery' element={<GalleryPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

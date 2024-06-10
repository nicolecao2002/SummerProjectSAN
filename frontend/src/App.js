import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainNavbar from './components/MainNavbar.js';
import'./components/css/MainNavbar.css';
import HomePage from './components/HomePage.js';

function App() {
  return (
    <BrowserRouter>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/weather" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

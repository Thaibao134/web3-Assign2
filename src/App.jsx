import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import Gallery from './components/Gallery'
import Painting from './components/Painting'
import Artist from './components/Artist'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Paintings" element={<Painting />} />
        <Route path="/Artist" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

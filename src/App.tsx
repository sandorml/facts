import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<div>about</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

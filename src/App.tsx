import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<div>facts</div>} />
          <Route path="/about" element={<div>about</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

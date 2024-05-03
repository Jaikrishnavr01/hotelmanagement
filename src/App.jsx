import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Corrected import
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </>
  );
}

export default App;

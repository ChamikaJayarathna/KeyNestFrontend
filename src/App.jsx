import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
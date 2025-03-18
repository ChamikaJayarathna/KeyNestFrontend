import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PropertyPage from './pages/PropertyPage';
import { AuthContextProvider } from './context/AuthContext';
import PredictPropertyPage from './pages/PredictPropertyPage';

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/property' element={<PropertyPage/>} />
          <Route path='/predict-property' element={<PredictPropertyPage/>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
import React from 'react';
import './helpers/_reset.scss'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './containers/home/Home';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
};

export default App;

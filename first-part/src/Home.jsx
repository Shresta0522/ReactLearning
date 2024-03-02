import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterSignin from './components/RegisterSignin/RegisterSignin';
import Login from './components/RegisterSignin/Login';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterSignin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Home

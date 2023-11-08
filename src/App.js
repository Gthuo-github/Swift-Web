import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

import Header from './components/common/heading/Header'
import Description from './components/Description';
import Footer from './components/common/heading/Footer';
import Home from './components/common/heading/Home';
import Features from './components/common/features/Features';

import {Route, Routes, Router } from 'react-router-dom'
import ImpModel from './components/common/services/ImpModel'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Features' element={<Features />}/>
        <Route path='Services' element={<ImpModel />}/>
      </Routes>
    </>
  )
}

export default App
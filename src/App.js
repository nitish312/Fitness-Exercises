import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Box } from '@mui/material'

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div width="400px" sx={{ width: {x1: '1488px'}}} m="auto">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './Layout/Header'

import HomePage from './Pages/HomePage/HomePage'
import BestCar from './Pages/BestCar/BestCar'
import KoreyaCar from './Pages/KoreyaCar/KoreyaCar'
import SingleCar from './Pages/KoreyaCar/singleCar'
import CustomCar from './Pages/CustomCar/CustomCar'
import HybridCar from './Pages/HybridCar/HybridCar'
import ElectricCar from './Pages/ElectricCar/ElectricCar'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/BestCar" element={<BestCar />} />
        <Route path="/KoreyaCar" element={<KoreyaCar />} />
        <Route path="/KoreyaCar/:id" element={<SingleCar />} />
        <Route path="/CustomCar" element={<CustomCar />} />
        <Route path="/HybridCar" element={<HybridCar />} />
        <Route path="/ElectricCar" element={<ElectricCar />} />
      </Routes>
    </Router>
  )
}

export default App

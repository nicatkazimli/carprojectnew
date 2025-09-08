import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>
        <nav className="nav-links">
          <Link to="/">Ana Səhifə</Link> 
          <Link to="/BestCar">Ən çox satılanlar</Link>
          <Link to="/KoreyaCar">Koreyada olan avtomobillər</Link>
          <Link to="/CustomCar">Yolda olan avtomobillər</Link>
          <Link to="/HybridCar">Hibrid avtomobillər</Link>
          <Link to="/ElectricCar">Elektrik avtomobillər</Link>
        </nav>
      </div>

      <div className="right-section">
      </div>
    </header>
  )
}

export default Header

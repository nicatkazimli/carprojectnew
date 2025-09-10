import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active link' : 'link'}>Ana Səhifə</NavLink>
          <NavLink to="/BestCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>Ən çox satılanlar</NavLink>
          <NavLink to="/KoreyaCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>Koreyada olan avtomobillər</NavLink>
          <NavLink to="/CustomCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>Yolda olan avtomobillər</NavLink>
          <NavLink to="/HybridCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>Hibrid avtomobillər</NavLink>
          <NavLink to="/ElectricCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>Elektrik avtomobillər</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

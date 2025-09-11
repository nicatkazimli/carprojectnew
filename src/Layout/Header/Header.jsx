import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import ShinyText from '../Shiny/Shiny'

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>
       

        <nav className="nav-links">
          
          <NavLink to="/" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}>Ana Səhifə</ShinyText>
          </NavLink>
          <NavLink to="/BestCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}> Ən çox satılanlar</ShinyText>
          </NavLink>
          <NavLink to="/KoreyaCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}> Koreyada olan avtomobillər</ShinyText>
          </NavLink>
          <NavLink to="/CustomCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}>Yolda olan avtomobillər</ShinyText>
          </NavLink>
          <NavLink to="/HybridCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}>Hibrid avtomobillər</ShinyText>
          </NavLink>
          <NavLink to="/ElectricCar" className={({ isActive }) => isActive ? 'active link' : 'link'}>
          <ShinyText speed={3}> Elektrik avtomobillər</ShinyText>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

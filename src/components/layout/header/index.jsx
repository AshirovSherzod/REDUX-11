import React from 'react'
import './headers.scss'
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <>
      <div className="sub-header">
      </div>
      <header>
        <nav className='nav container' >
          <ul className='nav__list row'>
            <li>СЛАДКИЕ ДНИ</li>
            <li>подарочные наборы</li>
            <li>Собрать набор</li>
          </ul>
          <div className="nav__img">
            <img src={logo} alt="" />
          </div>
          <ul className='nav__list row'>
            <li>Создать дизайн</li>
            <li>КОМПАНИЯМ</li>
            <li>ВЕСЬ КАТАЛОГ</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
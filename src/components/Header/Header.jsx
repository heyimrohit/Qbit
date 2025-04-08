import React from 'react'
import Container from '../Container/Container'
import './Header.css'

const Header = () => {
  return (
    <Container>
      <header className='navbar'>
        <div className="nav-left">
          {/* <img src="" alt="" /> */}
          <span>Logo</span>
        </div>
        <div className="nav-right">
          <ul className='nav-right-list'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
          
        </div>
      </header>
    </Container>
  )
}

export default Header
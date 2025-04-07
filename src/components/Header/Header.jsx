import React from 'react'
import Container from '../Container/Container'

const Header = () => {
  return (
    <Container>
      <header className='nav'>
        <div className="nav-left">left</div>
        <div className="nav-right">right</div>
      </header>
    </Container>
  )
}

export default Header
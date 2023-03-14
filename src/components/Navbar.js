import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>INSTRUMENT</div>
        <ul className='nav-links'>
            <li className='nav-link'>what we do</li>
            <li className='nav-link'>who we are</li>
            <li className='nav-link'>being here</li>
            <li className='nav-link'>careers</li>
        </ul>
    </div>
  )
}

export default Navbar
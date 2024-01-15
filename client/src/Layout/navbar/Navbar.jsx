import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (

    <nav className='Navbar'>

        {/* <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li> */}
        <Link to="/">Home</Link>
        <Link to="/tasktree">Task Tree</Link>
        <Link to="/greenquest">Green Quest</Link>
        <Link to="/signin">Sign In</Link>

    </nav>
  )
}

export default Navbar
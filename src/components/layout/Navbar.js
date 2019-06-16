import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1><i className="fab fa-github"></i>{title}</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}


export default Navbar
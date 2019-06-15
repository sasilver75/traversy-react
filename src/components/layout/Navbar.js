import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Navbar = ({title}) => {
  return (
    <nav className='navbar bg-primary'>
      <h1><i className="fab fa-github"></i>{title}</h1>
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
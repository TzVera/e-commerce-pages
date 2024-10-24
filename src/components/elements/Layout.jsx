/* Layout */

import './Layout.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  return (
    <>
      <header>PÁGINA ECOMMERCE DESARROLLO EN REACT JS</header>
      <button className='button_register_layout'><Link to="/registro">Registro</Link></button>
      <button className='button_login_layout'><Link to="/login">Login</Link></button>
      <main>{children}</main>
    </>
  )
}

export default Layout

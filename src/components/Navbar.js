// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Brand</Link>
      <ul>
        <li><Link to="/category/auriculares">Auriculares</Link></li>
        <li><Link to="/category/estuche">Estuche</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
      <div>Cart</div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>T-Shirt Printing</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/design">Design Your T-Shirt</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;

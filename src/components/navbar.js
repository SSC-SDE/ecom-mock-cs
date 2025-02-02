import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  //const username = useSelector((state) => state.user.username);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">eCommerce</Link>
        <Link to="/add-product">Add a product</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
      <div className="navbar-right">
        {"E.com@shankhya.com"}
      </div>
    </nav>
  );
};

export default Navbar;

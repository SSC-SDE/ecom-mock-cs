import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);
  //const username = useSelector((state) => state.user.username);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">MyLogoFiller</Link>
        <Link to="/add-product">Add Product ➕</Link>
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </div>
      <div className="navbar-right">
        {/* {"E.com@shankhya.com"} */}
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fprofile%2520picture%2F&psig=AOvVaw1cxlUd4kDMkwsoCNZgR-g4&ust=1738612038451000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiy0N7gpYsDFQAAAAAdAAAAABAE" alt="E.com@shankhya.com"/>
      
      </div>
    </nav>
  );
};

export default Navbar;

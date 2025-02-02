import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { toast } from "react-toastify";
import "./cart.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    toast.info("❌ Product removed from cart");
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty 😢</h2>
        <p>Looks like you haven't added anything yet.</p>
        <a href="/" className="shop-now-btn">🛍️ Shop Now</a>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item-card">
          <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h3 className="cart-item-name">{item.name}</h3>
            <p className="cart-item-price">💰 Rs {item.price}</p>
            <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>
              ❌ Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

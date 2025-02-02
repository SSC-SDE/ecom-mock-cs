import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { toast } from "react-toastify";
import "./productDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Oops! Product not found 😢</h2>
        <p>It looks like this product doesn't exist.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("🎉 Product added to cart!");
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">💰 Rs {product.price}</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

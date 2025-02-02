import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../slices/productSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; 

const ProductCard = ({ product, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    ratings: product.ratings,
  });

  const dispatch = useDispatch();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    dispatch(editProduct({ ...product, ...editedProduct }));
    toast.success("Product updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      <div className="product-details">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <h3 className="product-name">
          {!isEditing ? (
            <Link to={`/products/${product.id}`} className="product-link">
            {product.name}
            </Link>
          ) : (
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleEditChange}
              className="product-name"
              autoFocus
            />
          )}
        </h3>
        <p className="product-price">
          Price: {!isEditing ? `Rs ${product.price}` : (
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleEditChange}
              className="product-price"
            />
          )}
        </p>
        <p className="product-rating">
          Product Rating: {!isEditing ? product.ratings : (
            <input
              type="number"
              name="ratings"
              value={editedProduct.ratings}
              onChange={handleEditChange}
              className="product-rating"
              min="1"
              max="5"
            />
          )}
        </p>
      </div>
      <div className="product-actions">
        <p className="product-description">
          {!isEditing ? (
            product.description
          ) : (
            <textarea
              name="description"
              value={editedProduct.description}
              onChange={handleEditChange}
              className="product-description"
            />
          )}
        </p>
        <div className="button-group">
          {!isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(true)}
                
              >
                Edit ✏️
              </button>
              <button onClick={() => onDelete(product.id)}>
                Delete 🗑️
              </button>
            </>
          ) : (
            <>
              <button onClick={handleSave} className="product-button">
              Save 💾
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="product-button"
              >
                Cancel ❌
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

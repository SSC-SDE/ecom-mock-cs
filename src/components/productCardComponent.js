import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProduct } from '../slices/productSlice';
import { toast } from 'react-toastify';

const ProductCard = ({ product, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const dispatch = useDispatch();

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    dispatch(editProduct(editedProduct));
    toast.success('Product updated successfully!');
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editedProduct.description}
            onChange={handleEditChange}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: Rs {product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

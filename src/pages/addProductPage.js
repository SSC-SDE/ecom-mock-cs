import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/productSlice';
import { toast } from 'react-toastify';
import './addProductPage.css'; // Import the CSS file

const AddProductPage = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.description) {
      toast.error('All fields are required');
      return;
    }
    try {
      await dispatch(addProduct(product)).unwrap();
      toast.success('Product added successfully!');
      setProduct({ name: '', price: '', description: '', image: '' });
    } catch (err) {
      toast.error('Failed to add product');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add a New Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleInputChange}
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;

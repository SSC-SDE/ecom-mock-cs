import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((product) => product.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Product added to cart!');
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: Rs {product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailPage;

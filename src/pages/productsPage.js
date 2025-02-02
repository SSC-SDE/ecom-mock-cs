import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../slices/productSlice";
import ProductCard from "../components/productCardComponent";
import { toast } from "react-toastify";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setSortedItems([...items]);
  }, [items]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.warning("Deleted");
  };

  const handleSortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => 
      sortAscending ? a.price - b.price : b.price - a.price
    );
    setSortedItems(sorted);
    setSortAscending(!sortAscending);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error loading products</p>;

  return (
    <div className="products-container">
      <div className="sort-container">
        <button onClick={handleSortByPrice} className="sort-button">
          Sort by Price {sortAscending ? "▲" : "▼"}
        </button>
      </div>
      <div className="products">
        {sortedItems.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

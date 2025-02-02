import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Navbar from './components/navbar';
import ProductsPage from './pages/productsPage';
import AddProductPage from './pages/addProductPage';
import ProductDetailPage from './pages/productDetailPage';
import CartPage from './pages/cart';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      {/* PersistGate delays rendering until Redux state is rehydrated */}
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <ToastContainer position="top-right" autoClose={3000} />
        <Router>
          <Navbar />
          <div className="content">
          <main>
            <Routes>
              {/* Main Products Page */}
              <Route path="/" element={<ProductsPage />} />

              {/* Other Pages */}
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />

              {/* Redirect any unknown routes */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
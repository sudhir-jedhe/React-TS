// ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // CSS for styling (customize as per your project)

const ProductDetail = ({ products }) => {
  const { productId } = useParams(); // Accessing URL parameter (productId)

  // Find the product based on productId
  const product = products.find(prod => prod.id === parseInt(productId));

  if (!product) {
    return <div className="product-detail">Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;

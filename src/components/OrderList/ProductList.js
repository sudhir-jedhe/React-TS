import React from 'react';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Tags: {product.tags.join(', ')}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;


/*************************************** */

import React, { useState, useEffect } from 'react';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products, onPageChange, currentPage }) => {
  const [sortBy, setSortBy] = useState('date'); // Default sorting by date
  const [pageSize] = useState(10); // Number of products per page

  const sortedProducts = products.sort((a, b) => {
    if (sortBy === 'price') {
      return a.price - b.price;
    } else if (sortBy === 'brand') {
      return a.brand.localeCompare(b.brand);
    } else {
      // Default to sort by date
      return new Date(b.date) - new Date(a.date);
    }
  });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (pageNum) => {
    onPageChange(pageNum);
  };

  return (
    <div className="product-list">
      <div className="sort-options">
        <label>Sort By:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="price">Price</option>
          <option value="brand">Brand</option>
        </select>
      </div>
      {sortedProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize).map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          {/* Add more details as needed */}
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / pageSize) }, (_, index) => index + 1).map(pageNum => (
          <button key={pageNum} onClick={() => handlePageChange(pageNum)}>
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


/****************************************** */

// ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;



/********************************* */
// ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;










/************************************************ */
// ProductList.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <input
            type="checkbox"
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleCheckboxChange(product.id)}
          />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;



/************************************************* */

// ProductList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // CSS for styling (customize as per your project)

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Size: {product.size}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;



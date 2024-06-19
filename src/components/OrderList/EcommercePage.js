import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch products and categories from API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', tags: ['tag1', 'tag2'] },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', tags: ['tag2', 'tag3'] },
      // Add more products
    ];
    const initialCategories = [
      { id: 'catA', name: 'Category A' },
      { id: 'catB', name: 'Category B' },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    // Implement filtering logic based on categoryId
    // Example: filter products based on selected category
    const filteredProducts = products.filter(product => product.category === categoryId);
    setProducts(filteredProducts);
  };

  const resetFilters = () => {
    setSelectedCategory('');
    // Reset other filters as needed (price, brand, etc.)
    // Fetch all products or reset to initial state
    // Example: setProducts(initialProducts);
  };

  return (
    <div className="ecommerce-page">
      <Navbar categories={categories} onSelectCategory={filterProductsByCategory} />
      <div className="main-content">
        <button onClick={resetFilters}>Reset Filters</button>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default EcommercePage;




/*********************************************************** */
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', date: '2024-06-26' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', date: '2024-06-25' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'catA', name: 'Category A' },
      { id: 'catB', name: 'Category B' },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    // Implement filtering logic based on categoryId
    // Example: filter products based on selected category
    const filteredProducts = products.filter(product => product.category === categoryId);
    setProducts(filteredProducts);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="ecommerce-page">
      <Navbar categories={categories} onSelectCategory={filterProductsByCategory} />
      <div className="main-content">
        <ProductList products={products} onPageChange={handlePageChange} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default EcommercePage;
/**************************************************** */

// EcommercePage.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail'; // Import ProductDetail component
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', description: 'Description of Product 1' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', description: 'Description of Product 2' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'catA', name: 'Category A' },
      { id: 'catB', name: 'Category B' },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    // Implement filtering logic based on categoryId
    // Example: filter products based on selected category
    const filteredProducts = products.filter(product => product.category === categoryId);
    setProducts(filteredProducts);
  };

  return (
    <Router>
      <div className="ecommerce-page">
        <Navbar categories={categories} onSelectCategory={filterProductsByCategory} />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <ProductList products={products} />
            </Route>
            <Route path="/product/:productId">
              <ProductDetail products={products} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default EcommercePage;



/******************************************************** */

// EcommercePage.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', description: 'Description of Product 1' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', description: 'Description of Product 2' },
      { id: 3, name: 'Product 3', category: 'Category A', price: 120, brand: 'Brand Z', description: 'Description of Product 3' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'catA', name: 'Category A' },
      { id: 'catB', name: 'Category B' },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const getFilteredProducts = () => {
    if (!selectedCategory) {
      return products; // Return all products if no category is selected
    }
    return products.filter(product => product.category === selectedCategory);
  };

  return (
    <Router>
      <div className="ecommerce-page">
        <Navbar categories={categories} onSelectCategory={filterProductsByCategory} />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <ProductList products={getFilteredProducts()} />
            </Route>
            <Route path="/product/:productId">
              <ProductDetail products={products} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default EcommercePage;



/********************************* */
// EcommercePage.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', description: 'Description of Product 1' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', description: 'Description of Product 2' },
      { id: 3, name: 'Product 3', category: 'Category A', price: 120, brand: 'Brand Z', description: 'Description of Product 3' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'catA', name: 'Category A' },
      { id: 'catB', name: 'Category B' },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Router>
      <div className="ecommerce-page">
        <Navbar categories={categories} onSelectCategory={filterProductsByCategory} />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <ProductList products={selectedCategory ? products.filter(prod => prod.category === selectedCategory) : products} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default EcommercePage;


/************************************************** */

// EcommercePage.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    sizes: [],
    prices: [],
  });

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', size: 'Small' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', size: 'Medium' },
      { id: 3, name: 'Product 3', category: 'Category A', price: 120, brand: 'Brand X', size: 'Large' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'brands', name: 'Brands', options: ['Brand X', 'Brand Y', 'Brand Z'] },
      { id: 'sizes', name: 'Sizes', options: ['Small', 'Medium', 'Large'] },
      { id: 'prices', name: 'Prices', options: ['Below $100', '$100 - $200', 'Above $200'] },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter(v => v !== value)
        : [...prevFilters[category], value],
    }));
  };

  const filterProducts = () => {
    return products.filter(product =>
      selectedFilters.brands.length === 0 || selectedFilters.brands.includes(product.brand)
    ).filter(product =>
      selectedFilters.sizes.length === 0 || selectedFilters.sizes.includes(product.size)
    ).filter(product =>
      selectedFilters.prices.length === 0 || selectedFilters.prices.includes(getPriceRange(product.price))
    );
  };

  const getPriceRange = (price) => {
    if (price < 100) return 'Below $100';
    else if (price >= 100 && price <= 200) return '$100 - $200';
    else return 'Above $200';
  };

  return (
    <Router>
      <div className="ecommerce-page">
        <Navbar categories={categories} onChange={handleCheckboxChange} />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <ProductList products={filterProducts()} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default EcommercePage;



/*************************************************** */
// EcommercePage.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail'; // New component for product detail
import './EcommercePage.css'; // CSS for styling (customize as per your project)

const EcommercePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState('date'); // Default sorting by date
  const [sortOrder, setSortOrder] = useState('asc'); // Default sort order ascending

  useEffect(() => {
    // Fetch products and categories from backend API or mock data
    // Example mock data:
    const initialProducts = [
      { id: 1, name: 'Product 1', category: 'Category A', price: 100, brand: 'Brand X', size: 'Small' },
      { id: 2, name: 'Product 2', category: 'Category B', price: 150, brand: 'Brand Y', size: 'Medium' },
      { id: 3, name: 'Product 3', category: 'Category A', price: 120, brand: 'Brand X', size: 'Large' },
      // Add more products
    ];
    const initialCategories = [
      { id: 'brands', name: 'Brands', type: 'checkbox', options: ['Brand X', 'Brand Y', 'Brand Z'] },
      { id: 'sizes', name: 'Sizes', type: 'radio', options: ['Small', 'Medium', 'Large'] },
      // Add more categories
    ];
    setProducts(initialProducts);
    setCategories(initialCategories);
  }, []);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter(v => v !== value)
        : [...prevFilters[category], value],
    }));
  };

  const handleRadioChange = (category, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [category]: value,
    });
  };

  const handleSortChange = (sortByOption) => {
    setSortBy(sortByOption);
    // Toggle sort order if already sorting by the same option
    if (sortByOption === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
    }
  };

  const filterProducts = () => {
    return products.filter(product =>
      !selectedFilters.brands || selectedFilters.brands.includes(product.brand)
    ).filter(product =>
      !selectedFilters.sizes || selectedFilters.sizes === product.size
    ).sort((a, b) => {
      const aValue = getValueForSorting(a);
      const bValue = getValueForSorting(b);
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
  };

  const getValueForSorting = (product) => {
    switch (sortBy) {
      case 'price':
        return product.price;
      case 'brand':
        return product.brand;
      default:
        return product.id; // Sort by ID or date as fallback
    }
  };

  return (
    <Router>
      <div className="ecommerce-page">
        <Navbar
          categories={categories}
          onChange={handleCheckboxChange}
          onRadioChange={handleRadioChange}
          onSortChange={handleSortChange}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <ProductList products={filterProducts()} />
            </Route>
            <Route path="/product/:id">
              <ProductDetail products={products} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default EcommercePage;

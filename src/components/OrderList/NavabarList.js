import React from 'react';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <div className="navbar">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


/************************************* */


import React from 'react';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <div className="navbar">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


/**************************************************** */

// Navbar.js

import React from 'react';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <div className="navbar">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;


/*********************** */
// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onSelectCategory }) => {
  return (
    <div className="navbar">
      <ul>
        {categories.map(category => (
          <li key={category.id} onClick={() => onSelectCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;



/**************************** */

// Navbar.js

import React from 'react';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onChange }) => {
  return (
    <div className="navbar">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          {category.options.map(option => (
            <div key={option}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => onChange(category.id, option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Navbar;


/**************************************************** */
// Navbar.js

import React from 'react';
import './Navbar.css'; // CSS for styling (customize as per your project)

const Navbar = ({ categories, onChange, onSortChange, sortBy, sortOrder }) => {
  return (
    <div className="navbar">
      {categories.map(category => (
        <div key={category.id} className="category">
          <h3>{category.name}</h3>
          {category.type === 'checkbox' ? (
            category.options.map(option => (
              <div key={option}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => onChange(category.id, option)}
                  />
                  {option}
                </label>
              </div>
            ))
          ) : (
            <div>
              {category.options.map(option => (
                <label key={option}>
                  <input
                    type="radio"
                    name={category.id}
                    value={option}
                    onChange={() => onChange(category.id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="sort-options">
        <h3>Sort By:</h3>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="date">Date</option>
          <option value="price">Price</option>
          <option value="brand">Brand</option>
        </select>
        <button onClick={() => onSortChange(sortBy)}>{sortOrder === 'asc' ? '▲' : '▼'}</button>
      </div>
    </div>
  );
};

export default Navbar;



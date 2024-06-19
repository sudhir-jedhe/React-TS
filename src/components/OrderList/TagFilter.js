import React, { useState } from 'react';

const ProductList = () => {
  const [products] = useState([
    { id: 1, name: 'Product A', tags: ['tag1', 'tag2'] },
    { id: 2, name: 'Product B', tags: ['tag2', 'tag3'] },
    { id: 3, name: 'Product C', tags: ['tag1', 'tag3'] },
    { id: 4, name: 'Product D', tags: ['tag1'] },
    { id: 5, name: 'Product E', tags: ['tag3'] },
  ]);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredProducts = selectedTags.length > 0 ?
    products.filter(product => selectedTags.every(tag => product.tags.includes(tag))) :
    products;

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="tag-filter">
        <h3>Filter by Tags:</h3>
        <div className="tags">
          {['tag1', 'tag2', 'tag3'].map(tag => (
            <span
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ul className="products">
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - Tags: {product.tags.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

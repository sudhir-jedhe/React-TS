// App.js
import React, { useState } from 'react';
import TagFilter from './TagFilter';
import ProductList from './ProductList';

const App = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSelectTag = tag => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div>
      <h1>Product Filter Example</h1>
      <TagFilter tags={selectedTags} tagOptions={tagOptions} onSelectTag={handleSelectTag} />
      <ProductList products={products} selectedTags={selectedTags} />
    </div>
  );
};

export default App;

// TagFilter.js
import React from 'react';

const TagFilter = ({ tags, tagOptions, onSelectTag }) => {
  return (
    <div>
      {tagOptions.map((tag, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={tags.includes(tag)}
              onChange={() => onSelectTag(tag)}
            />
            {tag}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TagFilter;

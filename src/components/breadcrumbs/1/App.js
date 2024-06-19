import React from 'react';
import Breadcrumb from './Breadcrumb';

const YourComponent = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Subcategory', link: '/category/subcategory' },
    { label: 'Current Page' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} separator=">" expand={true} />
    </div>
  );
};

export default YourComponent;


/******************************* */

import React from 'react';
import Breadcrumb from './Breadcrumb';

const YourComponent = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Category', link: '/category' },
    { label: 'Subcategory', dropdown: [
        { label: 'Subcategory 1', link: '/category/subcategory1' },
        { label: 'Subcategory 2', link: '/category/subcategory2' },
        { label: 'Subcategory 3', link: '/category/subcategory3' },
      ]
    },
    { label: 'Current Page' },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} separator=">" expand={true} />
    </div>
  );
};

export default YourComponent;

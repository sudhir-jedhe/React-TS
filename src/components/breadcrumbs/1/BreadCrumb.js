// Breadcrumb.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Assuming you use React Router for routing

const Breadcrumb = ({ items, separator, expand }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.link ? (
              <Link to={item.link} aria-current={index === items.length - 1 ? 'page' : null}>
                {item.label}
              </Link>
            ) : (
              <span aria-current={index === items.length - 1 ? 'page' : null}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="separator">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string, // Link is optional
    })
  ).isRequired,
  separator: PropTypes.node, // Custom separator can be a string or a React element
  expand: PropTypes.bool, // Whether to expand breadcrumb items or not
};

Breadcrumb.defaultProps = {
  separator: '/',
  expand: false,
};

export default Breadcrumb;


/*************************************************** */

// Breadcrumb.js
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Assuming you use React Router for routing

const Breadcrumb = ({ items, separator, expand }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item.dropdown ? (
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id={`dropdownMenu${index}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {item.label}
                </button>
                <div className="dropdown-menu" aria-labelledby={`dropdownMenu${index}`}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} className="dropdown-item" to={subItem.link}>{subItem.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              item.link ? (
                <Link to={item.link} aria-current={index === items.length - 1 ? 'page' : null}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={index === items.length - 1 ? 'page' : null}>
                  {item.label}
                </span>
              )
            )}
            {index < items.length - 1 && (
              <span className="separator">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string, // Link is optional
      dropdown: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })),
    })
  ).isRequired,
  separator: PropTypes.node, // Custom separator can be a string or a React element
  expand: PropTypes.bool, // Whether to expand breadcrumb items or not
};

Breadcrumb.defaultProps = {
  separator: '/',
  expand: false,
};

export default Breadcrumb;


import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { navLinks } from './constants/navlinks';
import { ReactComponent as CloseIcon } from './icons/close.svg';

const CommandPalette = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        if (!isOpen) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (link) => {
    history.push(link);
    onClose();
  };

  return (
    <div className={`command-palette ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3>Command Palette</h3>
          <button className="close-btn" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
          placeholder="Search..."
        />
        <div className="links">
          {navLinks
            .filter((link) => link.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((link, index) => (
              <Link key={index} to={link.link} onClick={() => handleLinkClick(link.link)}>
                <div className="link-item">
                  <span>{link.name}</span>
                  <img src={link.icon} alt={link.name} />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

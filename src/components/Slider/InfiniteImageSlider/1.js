import React, { useState, useEffect } from 'react';
import { cardDetails } from './cardDetails';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === cardDetails.length - 1 ? 0 : prevSlide + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  const handleCardHover = (index) => {
    setHoveredSlide(index);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-6xl">
        <div className="flex overflow-x-hidden">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`flex-none w-64 h-48 mx-4 overflow-hidden bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ${
                index === hoveredSlide ? 'transition-none' : 'transition-all'
              }`}
              style={{
                transitionDelay: index === hoveredSlide ? '0s' : `${index * 0.1}s`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`,
              }}
              onClick={() => handleCardClick(card.link)}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              <div className="w-full h-full bg-gray-200">
                <img className="w-full h-32 object-cover" src={card.image} alt={card.name} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <p className="mt-2">{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState } from 'react';

function ImageSlider({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-slider">
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
            <button onClick={nextImage}>Next</button>
        </div>
    );
}

export default ImageSlider;


/****************************************** */
import React, { useState } from 'react';

function ImageSlider({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredImages = images.filter(image =>
        image.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentImageIndex(0); // Reset the current image index when the search query changes
    };

    return (
        <div className="image-slider">
            <input
                type="text"
                placeholder="Search images"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {filteredImages.length > 0 && (
                <>
                    <button onClick={prevImage}>Previous</button>
                    <img src={filteredImages[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
                    <button onClick={nextImage}>Next</button>
                </>
            )}
            {filteredImages.length === 0 && <p>No matching images found</p>}
        </div>
    );
}

export default ImageSlider;

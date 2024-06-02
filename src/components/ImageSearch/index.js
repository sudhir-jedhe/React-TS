import React, { useState, useEffect, useCallback } from 'react';

function ImageSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=`;

    const fetchImages = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL + searchQuery);
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            setImages(data.results);
            setError(null);
        } catch (error) {
            setError('An error occurred while fetching images');
            setImages([]);
        } finally {
            setLoading(false);
        }
    }, [API_URL, searchQuery]);

    useEffect(() => {
        if (searchQuery) {
            fetchImages();
        }
    }, [searchQuery, fetchImages]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="image-search">
            <input
                type="text"
                placeholder="Search images"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="image-grid">
                {images.map(image => (
                    <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                ))}
            </div>
        </div>
    );
}

export default ImageSearch;


/******************************** */
import React, { useState, useEffect, useCallback } from 'react';

function ImageSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const API_KEY = 'YOUR_API_KEY';
    const API_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=`;

    const fetchImages = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL + searchQuery);
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            if (page === 1) {
                setImages(data.results);
            } else {
                setImages(prevImages => [...prevImages, ...data.results]);
            }
            setError(null);
            setHasMore(data.results.length > 0);
        } catch (error) {
            setError('An error occurred while fetching images');
            setImages([]);
        } finally {
            setLoading(false);
        }
    }, [API_URL, searchQuery, page]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    useEffect(() => {
        if (searchQuery) {
            fetchImages();
        }
    }, [searchQuery, fetchImages, page]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleScroll = () => {
        if (loading || !hasMore) return;
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="image-search">
            <input
                type="text"
                placeholder="Search images"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="image-grid">
                {images.map(image => (
                    <img key={image.id} src={image.urls.small} alt={image.alt_description} />
                ))}
            </div>
            {!loading && hasMore && <p>Loading more images...</p>}
        </div>
    );
}

export default ImageSearch;


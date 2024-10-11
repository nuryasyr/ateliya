import React, { useState } from 'react';
import './ProductInfo.css';
import { FaPhone, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import productsData from './productsData';
import Card from './Card';

const ProductInfo = () => {
    const { id } = useParams(); // Get id from URL
    const product = productsData.find(item => item.id === parseInt(id)); // Find the product by id

    const images = product.images; // Get product images
    const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
    const [thumbnailIndex, setThumbnailIndex] = useState(0); // Track thumbnail scroll index

    // For similar products
    const [similarIndex, setSimilarIndex] = useState(0); // Track the index for similar products
    const visibleCards = 4; // Show 4 cards at once


    // Get similar products based on category
    const similarProducts = productsData.filter(item => item.category === product.category);

    const handleNextSimilar = () => {
        if (similarIndex + visibleCards < similarProducts.length) {
            setSimilarIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrevSimilar = () => {
        if (similarIndex > 0) {
            setSimilarIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Navigate to the next image
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Navigate to the previous image
    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Scroll thumbnails to the right
    const handleNextThumbnails = () => {
        if (thumbnailIndex + 4 < images.length) {
            setThumbnailIndex(thumbnailIndex + 1);
        }
    };

    // Scroll thumbnails to the left
    const handlePrevThumbnails = () => {
        if (thumbnailIndex > 0) {
            setThumbnailIndex(thumbnailIndex - 1);
        }
    };


    return (
        <>
            <div className="product-info-modal">
                {/* Left Section: Product Images */}
                <div className="product-image-section">
                    <div className="image-container">
                        <img src={images[currentIndex]} alt={product.name} className="main-image" />
                        <button className="prev-button" onClick={handlePrevImage}>
                            <SlArrowLeft />
                        </button>
                        <button className="next-button" onClick={handleNextImage}>
                            <SlArrowRight />
                        </button>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div className="thumbnail-navigation">
                        <button
                            className="prev-thumbnail-button"
                            onClick={handlePrevThumbnails}
                            disabled={thumbnailIndex === 0}>
                            <FaAngleLeft />
                        </button>

                        <div className="thumbnail-container">
                            {images.slice(thumbnailIndex, thumbnailIndex + 4).map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="thumbnail"
                                    onClick={() => setCurrentIndex(thumbnailIndex + index)}
                                />
                            ))}
                        </div>

                        <button
                            className="next-thumbnail-button"
                            onClick={handleNextThumbnails}
                            disabled={thumbnailIndex + 4 >= images.length}>
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="product-details">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">Bahasy: {product.cost} manat</p>
                    <p className="product-material">Materiýaly: {product.material}</p>
                    <p className="product-category">Kategoriýasy: {product.category}</p>
                    <p className="product-seller">Satyjy: {product.seller}</p>
                    <p className="product-description">{product.description}</p>

                    {/* Additional Details */}
                    <ul className="product-detail-list">
                        {product.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>

                    {/* Seller/Brand Info Container */}
                    <div className="seller-info">
                        <div className="logocontainer">
                            <img src={logo1} alt="Seller Logo" className="seller-logo" />
                        </div>
                        <h3>{product.seller}</h3>
                        <p><FaPhone /> {product.phone}</p>
                        <p><FaMapMarkerAlt /> {product.location}</p>

                        <div className="seller-social">
                            <p>
                                <a href={product.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href={product.tiktok} target="_blank" rel="noopener noreferrer">
                                    <FaTiktok />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className='similar-products-section'>
                <h3>Menzes Harytlar</h3>

                <div className='similar-products-container'>
                    <button
                        className="prev-similar-button"
                        onClick={handlePrevSimilar}
                        disabled={similarIndex === 0}>
                        <SlArrowLeft />
                    </button>

                    <div className='similar-products-display'>
                        {similarProducts
                            .slice(similarIndex, similarIndex + visibleCards)
                            .map((item) => (
                                <Link key={item.id} to={`/product/${item.id}`}>
                                    <Card product={item} />
                                </Link>
                            ))}
                    </div>

                    <button
                        className="next-similar-button"
                        onClick={handleNextSimilar}
                        disabled={similarIndex + visibleCards >= similarProducts.length}>
                        <SlArrowRight />
                    </button>
                </div>
            </div>

           
        </>
    );
};

export default ProductInfo;

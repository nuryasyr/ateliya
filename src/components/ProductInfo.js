import React, { useState } from 'react';
import './ProductInfo.css';
import { FaPhone, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import logo1 from '../assets/logo1.png'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"; 
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'; 
import { useParams } from 'react-router-dom'; 
import productsData from './productsData'; 

const ProductInfo = () => {
    const { id } = useParams(); // URL'den id'yi al
    const product = productsData.find(item => item.id === parseInt(id)); // Ürünü bul

    const images = product.images; // Ürünün resimlerini al
    const [currentIndex, setCurrentIndex] = useState(0); // Geçerli resim indeksini takip et
    const [thumbnailIndex, setThumbnailIndex] = useState(0); // Küçük resim kaydırma indeksini takip et

    // Sonraki resme geçiş yap
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Önceki resme geçiş yap
    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Küçük resim kaydırma sağa
    const handleNextThumbnails = () => {
        if (thumbnailIndex + 4 < images.length) {
            setThumbnailIndex(thumbnailIndex + 1);
        }
    };

    // Küçük resim kaydırma sola
    const handlePrevThumbnails = () => {
        if (thumbnailIndex > 0) {
            setThumbnailIndex(thumbnailIndex - 1);
        }
    };

    return (
        <div className="product-info-modal">
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
                <div className="thumbnail-navigation">
                    <button className="prev-thumbnail-button" onClick={handlePrevThumbnails} disabled={thumbnailIndex === 0}>
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
                    <button className="next-thumbnail-button" onClick={handleNextThumbnails} disabled={thumbnailIndex + 4 >= images.length}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">Bahasy: {product.cost} manat</p>
                <p className="product-material">Materiýaly: {product.material}</p>
                <p className="product-category">Kategoriýasy: {product.category}</p>
                <p className="product-seller">Satyjy: {product.seller}</p>
                <p className="product-description">{product.description}</p>
                <ul className="product-detail-list">
                    {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
                <div className="seller-info">
                    <div className="logocontainer">
                        <img src={logo1} alt="Seller Logo" className="seller-logo" />
                    </div>
                    <h3>{product.seller}</h3>
                    <p><FaPhone /> {product.phone}</p>
                    <p><FaMapMarkerAlt /> {product.location}</p>
                    <div className='seller-social'>
                        <p>
                            <a href={product.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href={product.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;

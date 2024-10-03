import React, { useState } from 'react';
import './ProductInfo.css';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'; // Import icons
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { FaPhone, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'; // Import additional icons
import fason1 from "../assets/fason1.jpg";
import fason2 from "../assets/fason2.jpg";
import fason3 from "../assets/fason3.jpg";
import fason4 from "../assets/fason4.jpg";
import fason5 from "../assets/fason5.jpg";
import fason6 from "../assets/fason6.jpg";
import logo1 from "../assets/logo1.png";

const ProductInfo = () => {
    const sampleProduct = {
        name: "Gundelik geymek ucin gulli stapel koynek 😍",
        price: 500,
        seller: "Ezber Eller",
        materiyal: "Stapel",
        category: "Gundelik koynek",
        description: "Onumin hasiyetnamalary:",
        details: [
            "Olceglerin ahlisi ba",
            "Zakaza gora hem tikip beryas",
            "Materiyaly pagta we yuwulandan son girenok, kicelenok",
            "Suwagtky in kop soralyan fason",
            "Elde we kir yuwujy masynda yuwup bolyar"
        ]
    };

    const sellerInfo = {
        name: "Ezber Eller",
        phone: "+123 456 789",
        location: "Ashgabat, Turkmenistan",
        instagram: "https://www.instagram.com/ezber_eller",
        tiktok: "https://www.tiktok.com/@ezber_eller",
        logo: logo1
    };

    const images = [fason1, fason2, fason3, fason4, fason5, fason6]; // Store all images
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
    const [thumbnailIndex, setThumbnailIndex] = useState(0); // Track the thumbnail scrolling index

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cycle backwards
    };

    const handleNextThumbnails = () => {
        if (thumbnailIndex + 4 < images.length) {
            setThumbnailIndex(thumbnailIndex + 1); // Move to next set of thumbnails
        }
    };

    const handlePrevThumbnails = () => {
        if (thumbnailIndex > 0) {
            setThumbnailIndex(thumbnailIndex - 1); // Move to previous set of thumbnails
        }
    };

    return (
        <div className="product-info-modal">
            <div className="product-image-section">
                <div className="image-container">
                    <img src={images[currentIndex]} alt={sampleProduct.name} className="main-image" />
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
                <h2 className="product-name">{sampleProduct.name}</h2>
                <p className="product-price">Bahasy: {sampleProduct.price} manat</p>
                <p className="product-materiyal">Materiýaly: {sampleProduct.materiyal}</p>
                <p className="product-category">Kategoriýasy: {sampleProduct.category}</p>
                <p className="product-seller">Satyjy: {sampleProduct.seller}</p>
                <p className="product-description">{sampleProduct.description}</p>
                <ul className="product-detail-list">
                    {sampleProduct.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>

                {/* Seller Info Container */}
                <div className="seller-info">
                    <div className="logocontainer">
                        <img src={sellerInfo.logo} alt="Seller Logo" className="seller-logo" />
                    </div>
                    <h3>{sellerInfo.name}</h3>
                    <p><FaPhone /> {sellerInfo.phone}</p>
                    <p><FaMapMarkerAlt /> {sellerInfo.location}</p>
                    <div className='seller-social'>
                        <p>
                            <a href={sellerInfo.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href={sellerInfo.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
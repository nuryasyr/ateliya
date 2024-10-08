import React, { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa'; // Göz ikonu için import
import './Card.css'; // Card CSS'i

const Card = ({ product }) => { // product prop'u alıyor
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length); // Her ürünün kendi images dizisi
        }, 4000); // 4 saniyede bir değişim
        return () => clearInterval(interval); // Belleği temizlemek için
    }, [product.images.length]); // images uzunluğu değişiklik gösterirse tekrar başlat

    return (
        <div className="product-card">
            <img
                src={product.images[currentImageIndex]} // product içindeki images kullanılıyor
                alt={product.name}
                className="product-img"
            />
            <div className="product-info">
                <div className="product-seller-name">
                    <span className="product-seller">{product.seller}</span> {/* Satıcı adı */}
                </div>
                <span className="productname">{product.name}</span> {/* Ürün adı */}

                <div className="productdetails">
                    <div className="product-date">{product.date}</div> {/* Ürün tarihi */}
                    <div className="product-views">
                        <FaEye className="view-icon" />
                        <span>200</span> {/* Sabit 200 görüntülenme */}
                    </div>
                    <div className="product-cost">{product.cost} manat</div> {/* Ürün fiyatı */}
                </div>
            </div>
        </div>
    );
};

export default Card;
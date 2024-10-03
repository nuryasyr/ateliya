import React, { useState, useEffect } from 'react';
import fason1 from "../assets/fason1.jpg";
import fason2 from "../assets/fason2.jpg";
import fason3 from "../assets/fason3.jpg";
import fason4 from "../assets/fason4.jpg";
import fason5 from "../assets/fason5.jpg";
import fason6 from "../assets/fason6.jpg";
import './Card.css';

const images = [fason1, fason2, fason3, fason4, fason5, fason6];

const Card = () => {
  // Ürün verisini Card bileşeni içinde tanımla
  const product = {
    name: "Gundelik geymek ucin gulli stapel koynek ",
    seller: "Ezber Eller",
    cost: 600,
    category: "Gundelik koynek",
    quality: "Stapel",
    date: "03.10.2024"
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 saniyede bir değişim
    return () => clearInterval(interval); // Belleği temizlemek için
  }, []);

  return (
    <div className="product-card">
      <div className="product-cost">
        {product.cost}.m
      </div>
      <img
    src={images[currentImageIndex]}
    alt={product.name}
    className="product-img"
    onError={(e) => { e.target.src = 'path/to/placeholder-image.jpg'; }} // Yedek resim
    />

      <div className="product-info">
        <div className="product-seller-name">
          <span className="product-seller">{product.seller}</span>
        </div>
        <span className="product-name">{product.name}</span>
        <div className="product-category-quality">
          <span className="product-category">Kategoriya: {product.category}</span>
          <span className="product-quality">Materiyal: {product.quality}</span>
        </div>
        <div className="product-date">
          {product.date}
        </div>
      </div>
    </div>
  );
};

export default Card;

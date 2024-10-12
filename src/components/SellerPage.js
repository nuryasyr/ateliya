import React, { useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 
import './SellerPage.css'; 
import productsData from './productsData';
import Filtr from './Filtr';

const SellerPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  return (
    <>
      <div className="shop-container">
        <div className="logo-container">
          <img src={productsData[0].sellerLogo} alt="Shop Logo" className="shop-logo" />
        </div>
        <div className="shop-details">
          <h2 className="shop-name">{productsData[0].seller}</h2>
          <p className="shop-description">
            Salam mahribanlarym bizin sahypamyza hoş geldiniz. Aşakdaky ähli harytlar ýörite size üçin.
          </p>
        </div>

        <div className="contact-info">
          <div className="social-links">
            <div className="icon-container">
              <a href={productsData[0].instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" />
                <span>{productsData[0].instagram.split('/').pop()}</span>
              </a>
            </div>
            <div className="icon-container">
              <a href={productsData[0].tiktok} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTiktok className="social-icon" />
                <span>@{productsData[0].tiktok.split('@')[1]}</span>
              </a>
            </div>
          </div>
          <div className="icon-container">
            <FaPhone className="social-icon" />
            <span>{productsData[0].phone}</span>
          </div>
          <div className="icon-container">
            <FaMapMarkerAlt className="social-icon" />
            <span>{productsData[0].location}</span>
          </div>
        </div>
      </div>

      <div className="filter-area">
        <Filtr products={productsData} setFilteredProducts={setFilteredProducts} />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SellerPage;

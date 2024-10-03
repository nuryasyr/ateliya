import React from 'react';
import { FaInstagram, FaTiktok, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './ShopInfo.css'; // CSS'i ayrı bir dosyada tutalım
import logo1 from "../assets/logo1.png";

const ShopInfo = () => {
  return (
    <div className="shop-container">
      <div className="logo-container">
        <img src={logo1} alt="Shop Logo" className="shop-logo" />
      </div>
      <div className="shop-details">
        <h2 className="shop-name">Ezber Eller</h2>
        <p className="shop-description">
          Salam mahribanlarym bizin sahypamyza hos geldiniz. Asakdaky ahli harytlar yorite siz ucin.
        </p>
      </div>
      <div className="contact-info">
        <div className="social-links">
          <div className="icon-container">
            <a href="https://www.instagram.com/ezbereller_lybaslary" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram className="social-icon" />
              <span>ezbereller_lybaslary</span>
            </a>
          </div>
          <div className="icon-container">
            <a href="https://www.tiktok.com/@yourTikTokHandle" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTiktok className="social-icon" />
              <span>@yourTikTokHandle</span>
            </a>
          </div>
        </div>
        <div className="icon-container">
          <FaPhone className="social-icon" />
          <span>+123-456-7890</span>
        </div>
        <div className="icon-container">
          <FaMapMarkerAlt className="social-icon" />
          <span>123 Main Street, City, Country</span>
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;

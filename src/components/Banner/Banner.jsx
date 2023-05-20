import React from 'react';
import './Banner.css';
import bannerImage from './banner-tienda.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner de la tienda" />
          </div>
  );
}

export default Banner;

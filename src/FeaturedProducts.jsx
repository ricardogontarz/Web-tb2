import React, { useState, useEffect } from "react";
import './FeaturedProducts.css';
import herbacida from '../img/glifosato-citromax-1-litro_187532.webp';
import saraLogo from '../img/pomada-saralogo-matacura-30-g_186096.jpg';
import neomastic from '../img/neomastic-vaca-seca-10-g_186052.png';

import { FaStar } from 'react-icons/fa';

const FeaturedProducts = ({ onPaginaProdutoClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, name: 'Herbicida Glifosato Citromax 1L', image: herbacida, price: 26.31, rating: 4.5, description: 'Acaba com o mato que está tomando conta.' },
    { id: 2, name: 'Pomada Saralogo 30g - Matacura', image: saraLogo, price: 19.15, rating: 4.0, description: 'Cicatrização de ferimentos e antisséptico.' },
    { id: 3, name: 'Neomastic Vaca Seca 10g - Calbos', image: neomastic, price: 5.91, rating: 5.0, description: 'Tratamento de mastites em vacas secas.' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0));
  };

  const containerStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleComprarClick = (productId) => {
    onPaginaProdutoClick(productId);
  };

  return (
    <div className="featured-products">
      <h2>PRODUTOS EM DESTAQUE</h2>
      <div className="carousel">
        <button className="arrow prev" onClick={handlePrev}>&lt;</button>
        <div className="product-container" style={containerStyle}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">Preço: R${product.price.toFixed(2)}</p>
                <div className="product-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                  ))}
                </div>
                <p className="product-description">{product.description}</p>
                <button onClick={() => handleComprarClick(product.id)}>Comprar</button>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow next" onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default FeaturedProducts;
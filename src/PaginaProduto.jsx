import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './PaginaProduto.css';
import iphoneImage from '../img/pomada-saralogo-matacura-30-g_186096.jpg';

const PaginaProduto = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const product = {
    rating: 3.0, // Substitua isso pela lógica real para obter a classificação do produto
  };

  return (
    <div className="product-details">
      <div className="product-info-container">
        <div className="product-images">
          <img src={iphoneImage} alt="Produto" />
        </div>
        <div className="product-info">
          <h1 className="product-title">Pomada Saralogo 30g - Matacura</h1>
          <p className="product-description"> Cicatrização de ferimentos e antisséptico.</p>



          <div className="price-info">
            <p>
              <span className="original-price">R$ 20,59</span>
              <span className="discount">7% de desconto</span>
            </p>
            <p className="pix-price">R$ 19,15 à vista no Pix</p>
            <p className="installment-price">ou 1x de R$ 20,59 sem juros</p>
          </div>

          <div className="delivery-info">
            <p className="delivery-line">Calcule o prazo de entrega</p>
            <p>Entrega rápida para todo o Brasil</p>
          </div>
        </div>
      </div>

      <div className="customer-reviews">
        <h3>Avaliações dos Clientes</h3>

        <div className="customer-review">
          <p className="customer-name">João Marcos</p>
          <div className="customer-rating">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
            ))}
          </div>
          <p className="customer-comment">Produto incrível! Estou muito satisfeito com a compra.</p>
        </div>

        <div className="customer-review">
          <p className="customer-name">Davi Batista</p>
          <div className="customer-rating">
            {Array.from({ length: 4 }, (_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
            ))}
          </div>
          <p className="customer-comment">Produto atende às expectativas, mas esperava um pouco mais.</p>
        </div>

        <div className="customer-review">
          <p className="customer-name">Yara Luiza</p>
          <div className="customer-rating">
            {Array.from({ length: 2 }, (_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
            ))}
          </div>
          <p className="customer-comment">Produto com defeito e péssimo atendimento ao cliente. Não recomendo.</p>
        </div>
      </div>
    </div>
  );
};

export default PaginaProduto;
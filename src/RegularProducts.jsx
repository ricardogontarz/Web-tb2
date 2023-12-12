import React from 'react';
import './RegularProducts.css';
import herbacida from '../img/glifosato-citromax-1-litro_187532.webp';
import semMilho from '../img/semente-de-milho-lavrador_187889.webp';
import grafiteGraf from '../img/grafite-grafsolo_183488.jpg';
import hcg from '../img/chorulon-5000-ui_187348.webp';
import neomastic from '../img/neomastic-vaca-seca-10-g_186052.png';
import antiDiarreico from '../img/stop-antidiarreico-sulfametoxazol_186159.png';
import placencal from '../img/placencal_185206.webp';
import vermifugo from '../img/strondal-plus-4-comprimidos_186204.webp';
import saraLogo from '../img/pomada-saralogo-matacura-30-g_186096.jpg';

const RegularProducts = (props) => {
  const products = [
    { id: 1, category: 'Agricultura', name: 'Herbicida Glifosato Citromax 1L', price: 26.31, image: herbacida },
    { id: 2, category: 'Agricultura', name: 'Semente de Milho Lavrado', price: 10.67, image: semMilho },
    { id: 3, category: 'Agricultura', name: 'Grafite Grafsolo 5 Kg', price: 60.61, image: grafiteGraf },
    { id: 4, category: 'Bovinos', name: 'HCG Chorulon 5000 UI - MSD', price: 187.49, image: hcg },
    { id: 5, category: 'Bovinos', name: 'Neomastic Vaca Seca 10g - Calbos', price: 5.91, image: neomastic },
    { id: 6, category: 'Bovinos', name: 'Stop Anti-diarréico 10g - Calbos', price: 2.44, image: antiDiarreico },
    { id: 7, category: 'Cães e Gatos', name: 'Placencal Ocitocina - Calbos', price: 6.83, image: placencal },
    { id: 8, category: 'Cães e Gatos', name: 'Vermífugo Strondal® Plus - Indubras', price: 12.65, image: vermifugo },
    { id: 9, category: 'Cães e Gatos', name: 'Pomada Saralogo 30g - Matacura ', price: 19.15, image: saraLogo },
  ];

  const categories = [...new Set(products.map((product) => product.category))];

  const calculateAveragePrice = (category) => {
    const categoryProducts = products.filter((product) => product.category === category);
    const totalPrices = categoryProducts.reduce((sum, product) => sum + product.price, 0);
    return totalPrices / categoryProducts.length;
  };

  const handleBuyButtonClick = (productId) => {
    // Chame a função fornecida por props para indicar a mudança para PaginaProduto
    props.onPaginaProdutoClick(productId);
  };

  return (
    <div className="regular-products">
      <h2 className="category-title">PRODUTOS POR CATEGORIA</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3 className="category-heading">{category}</h3>
          <div className="product-list">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.image} alt={product.name} />
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">Preço: R${product.price.toFixed(2)}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyButtonClick(product.id)}
                  >
                    Comprar
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegularProducts;
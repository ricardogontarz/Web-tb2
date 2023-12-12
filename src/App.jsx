import React, { useState } from 'react';
import Navbar from './NavBar';
import FeaturedProducts from './FeaturedProducts';
import RegularProducts from './RegularProducts';
import Carrinho from './Carrinho';
import MeusPedidos from './MeusPedidos';
import PaginaProduto from './PaginaProduto';
import ContatoSuporteFAQ from './ContatoSuporteFAQ';
import './App.css';

function App() {
  const [isCarrinhoVisible, setIsCarrinhoVisible] = useState(false);
  const [isMeusPedidosVisible, setIsMeusPedidosVisible] = useState(false);
  const [isContatoSuporteFAQVisible, setIsContatoSuporteFAQVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleCarrinhoClick = () => {
    setIsCarrinhoVisible(!isCarrinhoVisible);
    setIsMeusPedidosVisible(false);
    setIsContatoSuporteFAQVisible(false);
    setSelectedProductId(null);
  };

  const handleMeusPedidosClick = () => {
    setIsMeusPedidosVisible(!isMeusPedidosVisible);
    setIsCarrinhoVisible(false);
    setIsContatoSuporteFAQVisible(false);
    setSelectedProductId(null);
  };

  const handleContatoSuporteFAQClick = () => {
    setIsContatoSuporteFAQVisible((prev) => !prev);
    setIsCarrinhoVisible(false);
    setIsMeusPedidosVisible(false);
    setSelectedProductId(null);
  };

  const handlePaginaProdutoClick = (productId) => {
    setSelectedProductId(productId);
    setIsCarrinhoVisible(false);
    setIsMeusPedidosVisible(false);
    setIsContatoSuporteFAQVisible(false);
  };

  const handleCloseCarrinho = () => {
    setIsCarrinhoVisible(false);
  };

  const handleCloseMeusPedidos = () => {
    setIsMeusPedidosVisible(false);
  };

  const handleConcluirCompra = () => {
    setIsCarrinhoVisible(false);
    setIsMeusPedidosVisible(true);
  };

  const handleCloseContatoSuporteFAQ = () => {
    setIsContatoSuporteFAQVisible(false);
  };

  return (
    <div className="app">
      <div className="content">
        <Navbar
          onCarrinhoClick={handleCarrinhoClick}
          onMeusPedidosClick={handleMeusPedidosClick}
          onContatoSuporteFAQClick={handleContatoSuporteFAQClick}
        />
        {isCarrinhoVisible ? (
          <Carrinho onClose={handleCloseCarrinho} onConcluirCompra={handleConcluirCompra} />
        ) : isMeusPedidosVisible ? (
          <MeusPedidos onClose={handleCloseMeusPedidos} />
        ) : isContatoSuporteFAQVisible ? (
          <ContatoSuporteFAQ onClose={handleCloseContatoSuporteFAQ} />
        ) : selectedProductId ? (
          <PaginaProduto productId={selectedProductId} />
        ) : (
          <>
            <FeaturedProducts onPaginaProdutoClick={handlePaginaProdutoClick} />
            <RegularProducts onPaginaProdutoClick={handlePaginaProdutoClick} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaQuestion } from 'react-icons/fa';
import companyLogo from '../img/logo-agripech.png';
import './NavBar.css';

const Navbar = ({ onCarrinhoClick, onLogoClick, onMeusPedidosClick, onContatoSuporteFAQClick }) => {
  const iconColor = '#ADD8E6';

  const [menuUsuarioAberto, setMenuUsuarioAberto] = useState(false);

  const toggleMenuUsuario = () => {
    setMenuUsuarioAberto(!menuUsuarioAberto);
  };

  return (
    <header className="header">
      <div className="logo-container" onClick={onLogoClick}>
        <a href="../">
          <figure className='logo-fig'>
            <img src={companyLogo} alt="Company Logo" className="logo" />
            <figcaption className='nome-empresa'>AGRIPECH</figcaption>
          </figure>
        
        </a>
      </div>
      
      <div className="search-container">
        <input type="text" placeholder="Pesquisar" className="search-bar" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="icons-container">
        {/* Adicione o ícone de ponto de interrogação aqui com a função de clique onContatoSuporteFAQClick */}
        <div className="icon" onClick={onContatoSuporteFAQClick}>
          <FaQuestion size={20} style={{ color: iconColor }} />
        </div>
        <a href="#" onClick={onCarrinhoClick} className="icon">
          <FaShoppingCart size={20} style={{ color: iconColor }} />
        </a>
        <div className="usuario-icon-container">
          <FaUser size={20} style={{ color: iconColor }} className="icon" onClick={toggleMenuUsuario} />
          {menuUsuarioAberto && (
            <div className="usuario-menu">
              <p onClick={() => console.log('Clicou em Meu Usuário')}>Meu Usuário</p>
              <p onClick={onMeusPedidosClick}>Meus Pedidos</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
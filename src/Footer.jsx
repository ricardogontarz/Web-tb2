import React from 'react';
import './footer.css';
import companyLogo from 'C:/Users/Usuario/app/src/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <img src={companyLogo} alt="Company Logo" className="logo" />
        <div className="footer-contact">
          <p>Email: suporte@agripech.com.br</p>
          <p>Telefone: (46) 99999-8888</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
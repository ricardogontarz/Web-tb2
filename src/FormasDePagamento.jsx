import React from 'react';
import './FormasDePagamento.css';

const FormasDePagamento = ({ formas, onSelectForma }) => {
  return (
    <div className="formas-pagamento-container">
      <h2>Formas de Pagamento</h2>
      <ul className="formas-pagamento-list">
        {formas.map((forma, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="formaPagamento"
                value={forma}
                onChange={() => onSelectForma(forma)}
              />
              {forma}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormasDePagamento;
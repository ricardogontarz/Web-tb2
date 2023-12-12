import React, { useState } from 'react';
import FormasDePagamento from './FormasDePagamento';
import InformacoesUsuario from './InformacoesUsuario';
import './Carrinho.css';
import produto2 from '../img/chorulon-5000-ui_187348.webp';
import herbacida from '../img/glifosato-citromax-1-litro_187532.webp';

const Carrinho = ({ onClose, onConcluirCompra }) => {
  const [carrinhoItens, setCarrinhoItens] = useState([
    { id: 1, nome: 'HCG Chorulon 5000 UI - MSD', preco: 187.49, quantidade: 1, imagem: produto2 },
    { id: 2, nome: 'Herbicida Glifosato Citromax 1L', preco: 26.31, quantidade: 1, imagem: herbacida },
  ]);

  const formasDePagamento = ['Crédito', 'Boleto', 'Pix'];
  const [formaSelecionada, setFormaSelecionada] = useState(formasDePagamento[0]);

  const usuarioInfo = {
    nome: 'Ricardo Gontarz',
    endereco: 'Rua Mantiqueira 3101',
    bairro: 'Padre Josimo',
    cpf: '123.456.789-00',
    cep: '85660-000',
    cidade: 'Dois Vizinhos',
    email: 'exemplo@gmail.com',
  };

  const calcularTotalVenda = () => {
    return carrinhoItens.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  const handleConcluirCompra = () => {
    onClose();
    onConcluirCompra();
  };

  return (
    <div className="carrinho-container">
      <h1>Carrinho de Vendas</h1>

      <ul>
        {carrinhoItens.map(item => (
          <li key={item.id} className="carrinho-item meu-item-carrinho">
            <img src={item.imagem} alt={item.nome} className="carrinho-item-imagem" />
            <div className="carrinho-item-info">
              <div className="carrinho-item-nome">{item.nome}</div>
              <div className="carrinho-item-preco">R$ {item.preco.toFixed(2)}</div>
              <div className="carrinho-item-quantidade">Quantidade: {item.quantidade}</div>
            </div>
          </li>
        ))}
      </ul>

      <p className="carrinho-item-total">Total da Venda: R$ {calcularTotalVenda().toFixed(2)}</p>

      <p className="frete-gratis-mensagem">FRETE GRÁTIS PARA TODO PAÍS</p>

      <FormasDePagamento formas={formasDePagamento} onSelectForma={setFormaSelecionada} />

      <InformacoesUsuario usuario={usuarioInfo} />
      
      <div className="botoes-container">
        <button onClick={onClose} className="carrinho-button fechar-carrinho">Fechar Carrinho</button>
        <button onClick={handleConcluirCompra} className="carrinho-button concluir-compra">CONCLUIR COMPRA</button>
      </div>
    </div>
  );
};

export default Carrinho;

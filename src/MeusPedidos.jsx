import React, { useState } from 'react';
import './MeusPedidos.css';
import produto2 from '../img/chorulon-5000-ui_187348.webp';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import herbacida from '../img/glifosato-citromax-1-litro_187532.webp'

const MeusPedidos = () => {
  const [pedidos, setPedidos] = useState([
    {
      id: 121803,
      codigoRastreamento: 'PC123456789BR',
      itens: [
        { id: 1, nome: 'HCG Chorulon 5000 UI - MSD', preco: 187.49, quantidade: 1, imagem: produto2 },
        { id: 2, nome: 'Herbicida Glifosato Citromax 1L', preco: 26.31, quantidade: 1, imagem: herbacida },
      ],
      total: 6998.00,
      status: 'Saiu para Entrega',
      localizacao: 'Curitiba-PR',
      tempoEstimado: '3 dias úteis',
    },
  ]);

  const handleCodigoRastreamentoChange = (pedidoId, novoCodigo) => {
    setPedidos((prevPedidos) =>
      prevPedidos.map((pedido) =>
        pedido.id === pedidoId ? { ...pedido, codigoRastreamento: novoCodigo } : pedido
      )
    );
  };

  return (
    <div className="meus-pedidos-container">
      <div className="barra-superior">
        <h1>Meus Pedidos</h1>
        {/* Adicione outros elementos na barra superior, se necessário */}
      </div>
      {pedidos.map((pedido) => (
        <div key={pedido.id} className="pedido-item">
          <label htmlFor={`codigoRastreamento-${pedido.id}`}>
            <FontAwesomeIcon icon={faRoute} /> Código de Rastreamento:  <FontAwesomeIcon icon={faRoute} />
          </label>
          <div className="codigo-rastreamento-container">
  <input
    type="text"
    id={`codigoRastreamento-${pedido.id}`}
    value={pedido.codigoRastreamento}
    onChange={(e) => handleCodigoRastreamentoChange(pedido.id, e.target.value)}
  />
</div>
          <h2>Pedido #{pedido.id}</h2>
          <ul>
            {pedido.itens.map((item) => (
              <li key={item.id}>
                <img src={item.imagem} alt={item.nome} className="pedido-item-imagem" />
                <div className="pedido-item-info">
                  <div className="pedido-item-nome">{item.nome}</div>
                  <div className="pedido-item-preco">R$ {item.preco.toFixed(2)}</div>
                  <div className="pedido-item-quantidade">Quantidade: {item.quantidade}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="detalhes-pedido">
            <p className="detalhes-pedido-info">
              <strong>Status:</strong> {pedido.status}
            </p>
            <p className="detalhes-pedido-info">
              <strong>Localização:</strong> {pedido.localizacao}
            </p>
            <p className="detalhes-pedido-info">
              <strong>Tempo Estimado de Entrega:</strong> {pedido.tempoEstimado}
            </p>
            <p className="detalhes-pedido-info total">
              <strong>Total do Pedido:</strong> R$ {pedido.total.toFixed(2)}
            </p>
          </div>
          {/* Caminho de entrega */}
          <div className="caminho-entrega">
            <div className={`fase ${pedido.status === 'Em andamento' ? 'ativa' : ''}`}>Pedido Recebido</div>
            <div className={`fase ${pedido.status === 'Saiu para Entrega' ? 'ativa' : ''}`}>Saiu para Entrega</div>
            <div className={`fase ${pedido.status === 'Em Trânsito' ? 'ativa' : ''}`}>Em Trânsito</div>
            <div className={`fase ${pedido.status === 'Entregue' ? 'ativa' : ''}`}>Entregue</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeusPedidos;
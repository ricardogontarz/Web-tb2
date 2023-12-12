import React from 'react';

const InformacoesUsuario = ({ usuario }) => {
  return (
    <div>
      <h2>Informações do Usuário</h2>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Endereço:</strong> {usuario.endereco}</p>
      <p><strong>Bairro:</strong> {usuario.bairro}</p>
      <p><strong>CPF:</strong> {usuario.cpf}</p>
      <p><strong>CEP:</strong> {usuario.cep}</p>
      <p><strong>Cidade:</strong> {usuario.cidade}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      {/* Adicione mais informações conforme necessário */}
    </div>
  );
};

export default InformacoesUsuario;
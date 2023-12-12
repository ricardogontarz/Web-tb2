import React from 'react';
import './ContatoSuporteFAQ.css';

const ContactSupportFAQ = () => {
  return (
    <div className="contact-support-faq-container">
      <h1 className="contact-title">Contato e Suporte</h1>

      {/* Informações de Contato */}
      <section className="contact-info-section">
  <h2 className="section-title">Informações de Contato</h2>
  <p className="contact-info"><strong>Empresa:</strong> AgriPech</p>
  <p className="contact-info"><strong>Endereço:</strong> Rua Princesa Isabel, Bairro Centro, 465</p>
  <p className="contact-info"><strong>Telefone:</strong> (46) 99999-8888</p>
  <p className="contact-info"><strong>E-mail: </strong>suporte@agripech.com.br</p>
</section>

      {/* Formulário de Contato */}
      <section className="contact-form-section">
        <h2>Entre em Contato</h2>
        <form>
          <label>
            Nome:
            <input type="text" />
          </label>
          <label>
            E-mail:
            <input type="text" />
          </label>
          <label>
            Mensagem:
            <textarea></textarea>
          </label>
          <button type="submit" className='envia'>Enviar</button>
        </form>
      </section>

      {/* FAQ (Perguntas Frequentes) */}
      <section className="faq-section">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-item">
          <p className="faq-question">Qual é a política de devolução?</p>
          <p className="faq-answer"><strong>Resposta: </strong>Nossa política de devolução é com base na garantia do produto e se for com uma motivo plausível como produto incorreto, cor incorreta, falha no sistema ou semelhante</p>
        </div>

        <div className="faq-item">
          <p className="faq-question">Como posso rastrear meu pedido?</p>
          <p className="faq-answer"><strong>Resposta: </strong>Para rastrear seu pedido basta clicar no ícone de usuário no canto superior da tela e depois em meus pedidos, após isso colocar o código de rastreamento enviado no e-mail junto ao pedido e conferir a situação do pedido e sua localidade atual</p>
        </div>
        <div className="faq-item">
          <p className="faq-question">Quais são as opções de pagamento disponíveis?</p>
          <p className="faq-answer"><strong>Resposta: </strong>Oferecemos como opções de pagamento Cartão de crédito, Boleto ou Pix</p>
        </div>
        {/* Adicione mais perguntas e respostas conforme necessário */}
      </section>
    </div>
  );
};

export default ContactSupportFAQ;
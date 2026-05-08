import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    company: '',
    user_email: '',
    service: 'Teste de Aplicativos',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    setStatus({
      loading: true,
      success: '',
      error: '',
    });

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        loading: false,
        success: 'Mensagem enviada com sucesso.',
        error: '',
      });

      setFormData({
        user_name: '',
        company: '',
        user_email: '',
        service: 'Teste de Aplicativos',
        message: '',
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: '',
        error: 'Não foi possível enviar a mensagem. Tente novamente.',
      });
    }
  };

  return (
    <section className="contact" id="contato">
      <div className="container contactGrid">
        <div className="contactInfo">
          <span className="sectionKicker">Contato</span>

          <h2>Vamos avaliar seu cenário de qualidade?</h2>

          <p>
            Envie uma breve descrição do seu produto e dos principais desafios
            atuais. Vamos avaliar onde testes, automação e estratégia de QA
            podem reduzir riscos e aumentar a confiança nas entregas.
          </p>

          <a
            className="contactItem emailLink"
            href="mailto:leafarccomputacao@gmail.com?subject=Contato%20via%20site"
          >
            <Mail size={20} />
            <span>Falar com nossa equipe por e-mail</span>
          </a>

          <a
            className="contactItem whatsappLink"
            href="https://wa.me/5511913339841"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={20} />
            <span>Falar pelo WhatsApp</span>
          </a>

          <div className="contactItem">
            Especialistas em testes, automação e qualidade para produtos digitais escaláveis.
          </div>
        </div>

        <form className="contactForm" onSubmit={sendEmail}>
          <div className="formGrid">
            <div className="field">
              <label htmlFor="user_name">Nome</label>
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Seu nome"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="company">Empresa</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da empresa"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="user_email">E-mail</label>
              <input
                id="user_email"
                name="user_email"
                type="email"
                placeholder="seuemail@empresa.com"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="service">Serviço principal</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>Teste de Aplicativos</option>
                <option>Teste Web</option>
                <option>Teste de API</option>
                <option>Automação de Testes</option>
                <option>QA em Dados</option>
                <option>Consultoria QA</option>
              </select>
            </div>

            <div className="field full">
              <label htmlFor="message">Descreva sua necessidade</label>
              <textarea
                id="message"
                name="message"
                placeholder="Exemplo: precisamos automatizar regressão web e API antes dos releases semanais..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status.success && (
              <p className="formMessage successMessage">{status.success}</p>
            )}

            {status.error && (
              <p className="formMessage errorMessage">{status.error}</p>
            )}

            <div className="field full">
              <button className="btnPrimary" type="submit" disabled={status.loading}>
                {status.loading ? 'Enviando...' : 'Enviar solicitação'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
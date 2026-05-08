import './Hero.css';
import { CheckCircle2 } from 'lucide-react';
import { dashboardCards, trustItems } from '../../data/siteData';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container heroGrid">
        <div className="heroContent">
          <span className="badge"><CheckCircle2 size={30} /> Especialistas em qualidade de software</span>
          <h1>Testes de software para empresas que precisam entregar com <span>segurança</span>.</h1>
          <p>
            Estruturamos testes Web, Mobile, API, automação, dados e processos de QA para reduzir falhas em produção,
            acelerar releases e dar visibilidade real sobre riscos do produto.
          </p>

          <div className="heroActions">
            <a className="btnPrimary" href="#contato">Agendar diagnóstico</a>
            <a className="btnOutline" href="#servicos">Conhecer serviços</a>
          </div>

          <div className="trustRow">
            {trustItems.map((item) => <span key={item}>✓ {item}</span>)}
          </div>
        </div>

        <aside className="visualBoard" aria-label="Painel de indicadores de QA">
          <div className="dashboardTop">
            <div className="windowDots"><i /><i /><i /></div>
            <span className="statusPill">Release validado</span>
          </div>

          <div className="boardGrid">
            <div className="miniCard large">
              <small>Cobertura crítica</small>
              <strong>78%</strong>
              <div className="progress"><span /></div>
            </div>

            {dashboardCards.map((card) => (
              <div className="miniCard" key={card.label}>
                <small>{card.label}</small>
                <strong>{card.value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;

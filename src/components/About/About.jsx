import './About.css';
import { aboutCards } from '../../data/siteData';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';

function About() {
  return (
    <section id="sobre" className="aboutSection">
      <div className="container">
        <SectionTitle
          kicker="Quem somos"
          title="Qualidade de software tratada como estratégia, não como etapa"
          description="Atuamos como parceiros estratégicos em qualidade de software, estruturando testes, automação e validações ponta a ponta para aumentar a confiabilidade das entregas. Nosso foco é reduzir riscos reais em produção, fortalecer a estabilidade do produto e gerar confiança em cada release."
        />

        <div className="splitGrid">
          {aboutCards.map((card) => <Card key={card.title} {...card} compact />)}
        </div>
      </div>
    </section>
  );
}

export default About;

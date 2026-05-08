import './Services.css';
import { services } from '../../data/siteData';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';

function Services() {
  return (
    <section id="servicos">
      <div className="container">
        <SectionTitle
          kicker="Serviços especializados"
          title="Destaque seus serviços por frente de qualidade"
          description="Essa divisão é mais forte comercialmente porque o cliente entende rapidamente onde você pode atuar: aplicativo, web, API, automação, dados e consultoria de QA."
        />

        <div className="servicesGrid">
          {services.map((service) => <Card key={service.title} {...service} />)}
        </div>
      </div>
    </section>
  );
}

export default Services;

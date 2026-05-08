import './Metrics.css';
import { metrics } from '../../data/siteData';
import SectionTitle from '../SectionTitle/SectionTitle';

function Metrics() {
  return (
    <section id="indicadores">
      <div className="container">
        <SectionTitle
          align="center"
          kicker="Visibilidade executiva"
          title="Qualidade precisa aparecer em números"
          description="O objetivo não é apenas executar testes. É gerar informação para decidir se o produto está pronto para produção."
        />

        <div className="metricsGrid">
          {metrics.map((metric) => (
            <div className="metricCard" key={metric.value}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metrics;

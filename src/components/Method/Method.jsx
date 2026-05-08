import './Method.css';
import { painPoints, methodSteps } from '../../data/siteData';

function Method() {
  return (
    <section className="splitSection" id="metodo">
      <div className="container splitGrid methodLayout">
        <div className="painPanel">
          <h2>O problema não é testar pouco. É testar sem estratégia.</h2>
          <p>
            Muitos times possuem testes, mas continuam sofrendo com bugs críticos, automações instáveis,
            baixa cobertura e pouca confiança no release.
          </p>

          <ul className="painList">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <Icon size={22} />
                <span><strong>{title}</strong><br />{description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="methodGrid">
          {methodSteps.map((step) => (
            <div className="methodCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Method;

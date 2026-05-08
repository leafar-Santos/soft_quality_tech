import './SectionTitle.css';
function SectionTitle({ kicker, title, description, align = 'left' }) {
  const className = align === 'center' ? 'sectionTitle centerTitle' : 'sectionTitle sectionHead';

  return (
    <div className={className}>
      <div>
        <div className="sectionKicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;

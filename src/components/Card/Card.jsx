import './Card.css';
function Card({ icon: Icon, variant = 'web', title, description, items, compact = false }) {
  return (
    <article className={`serviceCard ${variant} ${compact ? 'compact' : ''}`}>
      {Icon && (
        <div className="serviceIcon">
          <Icon size={28} strokeWidth={2.2} />
        </div>
      )}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {items?.length > 0 && (
        <ul className="serviceList">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
    </article>
  );
}

export default Card;

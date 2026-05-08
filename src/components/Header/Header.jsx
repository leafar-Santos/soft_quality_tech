import './Header.css';
import { menuItems } from '../../data/siteData';

function Header() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="#inicio" className="logo" aria-label="PrimeQA - início">
          <span className="logoMark">S.Q.T</span>
          <span>SOFT QUALITY TECH</span>
        </a>

        <nav className="menu" aria-label="Menu principal">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="navButton" href="#contato">Solicitar diagnóstico</a>
      </div>
    </header>
  );
}

export default Header;

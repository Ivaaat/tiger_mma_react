import logo from '../assets/tiger_mma.png';
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="nav-inner">
        <div className="nav-brand">
          <img alt="Tiger MMA logo" src={logo} />
          <span>Tiger <em>MMA</em></span>
        </div>
        <div className="nav-cta">
          <a className="phone-link" href="tel:+79302592998">+7 930 259-29-98</a>
          <a className="btn-gold" href="tel:+79302592998">Записаться</a>
        </div>
      </div>
    </header>
  );
}

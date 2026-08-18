import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img alt="Tiger MMA logo" src={logo} />
            <span>TIGER <em>MMA</em> FIGHT CLUB</span>
          </div>
          <div className="foot-links">
            <div>
              <h5>Направления</h5>
              <a href="#programs">ММА</a>
              <a href="#programs">Киокушин каратэ</a>
              <a href="#programs">Кикбоксинг</a>
              <a href="#programs">Женский фитнес</a>
            </div>
            <div>
              <h5>Контакты</h5>
              <a href="tel:+79302592998">+7 930 259-29-98</a>
              <p>Запись на пробное занятие по телефону</p>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© Tiger MMA Fight Club</span>
          <span>Mixed Martial Arts · Kickboxing &amp; Boxing</span>
        </div>
      </div>
    </footer>
  );
}

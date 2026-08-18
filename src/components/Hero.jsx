import logo from '../assets/tiger_mma.png';
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-arc-wrap">
            <img alt="Tiger MMA — единоборства и фитнес" src={logo} />
          </div>
          <div>
            <h1 className="display">
              Дисциплина<br />рождает <em>бойца</em>
            </h1>
            <p className="hero-sub">
              Единоборства и фитнес для всей семьи: от первых стоек в 3 года до
              взрослых силовых тренировок. Опытные тренеры, безопасная методика,
              результат, который видно уже через месяц.
            </p>
            <div className="hero-actions">
              <a className="btn-gold" href="tel:+79302592998">Записаться на пробное</a>
              <a className="btn-outline" href="#programs">Все направления</a>
            </div>
            <div className="hero-phone">
              <span>Звонок = запись</span>
              <a href="tel:+79302592998">+7 930 259-29-98</a>
            </div>
            <div className="hero-tags">
              <span className="tag">ММА — <em>с 6 лет</em></span>
              <span className="tag">Киокушин каратэ — <em>3+</em></span>
              <span className="tag">Кикбоксинг — <em>12+</em></span>
              <span className="tag">Женский фитнес</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

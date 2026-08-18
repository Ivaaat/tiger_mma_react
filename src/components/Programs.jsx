import './Programs.css'
const PROGRAMS = [
  {
    age: 'С 6 лет',
    title: 'ММА',
    text: 'Смешанные единоборства для тех, кто хочет драться по-настоящему: ударная техника, борьба, партер и спарринги под контролем тренера.',
  },
  {
    age: '3–5 · 6–9 · 10+',
    title: 'Киокушин каратэ',
    text: 'Классическая японская школа контактного каратэ. Группы поделены по возрасту — от игровой разминки для малышей до полноценной ударной техники для подростков.',
    sub: ['3–5 лет', '6–9 лет', '10+ лет'],
  },
  {
    age: 'С 12 лет',
    title: 'Кикбоксинг',
    text: 'Удары руками и ногами, работа на лапах и мешках, скорость и выносливость. Для подростков и взрослых, готовых к динамичным тренировкам.',
  },
  {
    age: 'Женщины',
    title: 'Силовой фитнес',
    text: 'Функциональные тренировки с отягощениями для женщин: сила, рельеф и уверенность в себе — без единоборств, но с той же дисциплиной.',
  },
];

function ProgramCard({ age, title, text, sub }) {
  return (
    <div className="prog-card">
      <span className="prog-age">{age}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      {sub && (
        <div className="prog-sub">
          {sub.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Programs() {
  return (
    <section className="programs" id="programs">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Направления</div>
          <h2 className="display">Выберите свой ринг</h2>
          <p>Четыре программы под разный возраст и цели — от первого детского татами до силового зала для мам.</p>
        </div>
        <div className="prog-grid">
          {PROGRAMS.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

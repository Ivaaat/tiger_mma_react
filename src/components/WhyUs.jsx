const REASONS = [
  {
    title: 'Возрастные группы',
    text: 'Отдельные программы для 3, 6, 10 лет и взрослых — нагрузка всегда по силам.',
  },
  {
    title: 'Опытные тренеры',
    text: 'Практикующие спортсмены, которые сами выступают и понимают, как учить технике безопасно.',
  },
  {
    title: 'Пробное занятие',
    text: 'Приходите познакомиться с залом и тренером до того, как примете решение.',
  },
  {
    title: 'Спарринги и разряды',
    text: 'Для тех, кто готов расти — соревнования, аттестации и разрядные пояса.',
  },
];

export default function WhyUs() {
  return (
    <section className="why">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Почему Tiger MMA</div>
          <h2 className="display">Клуб, куда возвращаются</h2>
          <p>Мы растим не разовых посетителей, а спортсменов — от первой тренировки до личных побед.</p>
        </div>
        <div className="why-grid">
          {REASONS.map((reason) => (
            <div className="why-item" key={reason.title}>
              <h4>{reason.title}</h4>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

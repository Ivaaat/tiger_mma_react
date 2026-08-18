import './Team.css'
import { useEffect, useState } from "react";

const COACHES = [
  {
    image: '/tiger_mma_kickboxing_coach_kozlov_mikhail_alexandrovich.jpg',
    role: 'ММА · Функциональная подготовка',
    name: 'Козлов Михаил Александрович',
    achievements: [
      "Мастер спорта международного класса",
      "Чемпион мира (Токио, 2009 г.)",
      "Чемпион Японии (2005 г.)",
      "Чемпион командного кубка мира (Хабаровск, 2004 г.)",
      `Двукратный Победитель международных соревнований "Кубок Оямы" (Хабаровск, 2000г и 2002 г)`,
      `Победитель международного коммерческого турнира "Нижегородский Дракон" 2011г`,
      "10-ти кратный чемпион России Победитель многочисленных всероссийских и международных соревнований",
      "Черный пояс 2 дан"
    ]
  },
  {
    image: '/tiger_mma_kickboxing_coach_kozlova_irina_olegovna.jpg',
    role: 'Бокс · Кикбоксинг',
    name: 'Козлова (Кряжева) Ирина Олеговна',
    achievements: [
      "Мастер спорта международного класса",
      "Тренер высшей категории",
      "Чемпионка мира (Хабаровск, 2015)",
      "Двукратный серебряный призер чемпионатов мира (Кроули, Англия 2013, Токио, Япония, 2018)",
      "Победитель Кубка мира (Токио, 2013)",
      "Многократный победитель и призер чемпионатов и кубков России с 2012г. по 2019г.",
      "Победитель и призер различных международных и всероссийских соревнований.",
      "Черный пояс 3 дан"
    ]
  }
];

function CoachCard({
  name,
  role,
  image,
  achievements,
  onClick,
}) {
  return (
    <article
      className="team-card"
      onClick={onClick}
      tabIndex="0"
      role="button"
    >
      <div className="team-card-img">
        <img src={image} alt={name} />
      </div>

      <div className="team-card-info">
        <h3>{name}</h3>
        <span>{role}</span>
      </div>
    </article>
  );
}

export default function Team() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  useEffect(() => {
    if (!selectedCoach) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCoach(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Запрещаем прокрутку страницы под модальным окном
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCoach]);

  return (
    <section className="team" id="team">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Тренеры Tiger MMA</div>

          <h2 className="display">Наша команда</h2>

          <p>
            Опытные тренеры, которые помогают прогрессировать с первого занятия.
          </p>
        </div>

        <div className="team-grid">
          {COACHES.map((coach) => (
            <CoachCard
              key={coach.name}
              {...coach}
              onClick={() => setSelectedCoach(coach)}
            />
          ))}
        </div>
      </div>

      {selectedCoach && (
        <div
          className="coach-modal"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="coach-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="coach-modal-close"
              onClick={() => setSelectedCoach(null)}
              aria-label="Закрыть"
              type="button"
            >
              ×
            </button>

            <img
              className="coach-modal-img"
              src={selectedCoach.image}
              alt={selectedCoach.name}
            />

            <div className="coach-modal-info">
              <div className="eyebrow">
                {selectedCoach.role}
              </div>

              <h3>{selectedCoach.name}</h3>

              {selectedCoach.achievements && (
                <div className="coach-achievements">
                  <h4>Достижения</h4>

                  <ul>
                    {selectedCoach.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

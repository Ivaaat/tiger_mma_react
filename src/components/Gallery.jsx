import './Gallery.css'

const PHOTOS = [
  {
    src: 'https://avatars.mds.yandex.net/get-altay/14007310/2a000001961c1b9de876764bcf0a72de237b/XXL_height',
    alt: 'Тренировочный зал Tiger MMA',
    className: 'gallery-main',
  },
  {
    src: 'https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=900&q=85',
    alt: 'Зона для тренировок',
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85',
    alt: 'Спортивное оборудование',
  },
  {
    src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85',
    alt: 'Тренировка в зале',
  },
  {
    src: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=85',
    alt: 'Спортивная площадка',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Tiger MMA inside</div>
          <h2 className="display">Фотографии зала</h2>
          <p>Пространство для ударной техники, борьбы, функциональной подготовки и спаррингов.</p>
        </div>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <img
              key={photo.src}
              className={photo.className}
              src={photo.src}
              alt={photo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

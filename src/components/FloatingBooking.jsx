import './FloatingBooking.css'

export default function FloatingBooking() {
    return (
        <a
            className="floating-booking"
            href="https://vk.ru/write-228456421"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Записаться онлайн через VK"
        ><span className="floating-booking-icon">↗</span>
            <span className="floating-booking-text">
                <span>Записаться</span>
                <span>онлайн</span>
            </span>
        </a>
    );
}
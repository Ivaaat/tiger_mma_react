import './FloatingBooking.css'

export default function FloatingBooking() {
    return (
        <a
            className="floating-booking"
            href="https://vk.ru/im/convo/-228456421?entrypoint=community_page&tab=all"
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
import css from '../css/Card.module.css';

export function Card({door}) {
    return (
                <div className={css.card}>
            <a onClick={() => window.open(door.img, '_blank')}>
                <img src={door.img} alt="" />
            </a>


            <div className={css["card-content"]}>
                <a href={`https://t.me/cnskfho?text=${encodeURIComponent(
                `Хочу заказать ворота\n${door.img}`
            )}`}
            className={css["card-button"]}
            target="_blank"
            rel="noopener"
            >
                написать
            </a>
            </div>
        </div>
    );
}

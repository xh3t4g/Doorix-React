export function Card({door}) {
    return (
                <div className="card">
            <a onClick={() => window.open(door.img, '_blank')}>
                <img src={door.img} alt="" />
            </a>


            <div className="card-content">
                <a href={`https://t.me/cnskfho?text=${encodeURIComponent(
                `Хочу заказать ворота\n${window.location.origin}/${door.img}`
            )}`}
            className="card-button"
            target="_blank"
            rel="noopener"
            >
                написать
            </a>
            </div>
        </div>
    );
}

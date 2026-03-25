import css from '../css/Delivery.module.css';

export function DeliveryPage ({setCurrentPage}) {
    return <>
    
    
        <header>
            <h1>Кованые ворота</h1>
            <nav>
                <button onClick={() => setCurrentPage('home')} >Каталог</button>
                <button onClick={() => setCurrentPage('delivery')} >Доставка</button>
                <button onClick={() => setCurrentPage('contacts')} >Контакты </button>
            </nav>
        </header>

        <main>
            <div className={css['container_delivery']}>
                <section className={css['section_del']}>
                    <h3>Доставка по всей Росcии 🇷🇺 </h3>

                    <div className={css["delivery_contetnt"]}>Полный перечень регионов и цен на доставку появится здесь позже. Сейчас вы можете легко узнать стоимость, связавшись с продавцом через раздел «Контакты».</div>
                </section>
            </div>
        </main>

        <footer>
            <h3>© 2026 Кованые ворота</h3>
            <p>+7 993 184 46 22</p>
        </footer>
    
    
    </>
}

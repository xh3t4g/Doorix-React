import css from '../css/Contacts.module.css';

export function ContactsPage ({setCurrentPage}) {
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
            <div className={css['container_contacts']}>
                <section className={css['section_del']}>
                    <h3>Контакты</h3>

                    <div className={css["content_buttons"]}>
                        <a href="https://t.me/cnskfho" className={css["Telegram"]}>Telegram</a>
                        <a href="https://wa.me/79931844622" className={css["WhatsApp"]}>WhatsApp</a>
                    </div>

                    <div className={css["contact-info"]}>консультация · расчёт · заказ                
                    </div>

                    <div className={css["response-time"]}>
                        Ответ в течение дня
                    </div>
                </section>
            </div>
        </main>

        <footer>
            <h3>© 2026 Кованые ворота</h3>
            <p>
                <a href="tel:+79931844622">+7 993 184 46 22</a>
            </p>
        </footer>

    
    </>
}

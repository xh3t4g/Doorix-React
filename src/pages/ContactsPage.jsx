import '../css/contacts.css'

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
            <section className='section_del'>
                <h3>Контакты</h3>

                <div class="content_buttons">
                    <a href="https://t.me/cnskfho" class="Telegram">Telegram</a>
                    <a href="https://wa.me/79931844622" class="WhatsApp">WhatsApp</a>
                </div>

                <div class="contact-info">консультация · расчёт · заказ                
                </div>

                <div class="response-time">
                    Ответ в течение дня
                </div>
            </section>
        </main>

        <footer>
            <h3>© 2026 Кованые ворота</h3>
            <p>+7 993 184 46 22</p>
        </footer>

    
    </>
}

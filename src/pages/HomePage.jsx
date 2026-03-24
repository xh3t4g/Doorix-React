import '../css/index.css'
import { Card } from "../components/Card";
import { doors } from "../components/CardIMG";

export function HomePage({setCurrentPage}) {
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
            <section>
                <div id='card-list'>
                    {doors.map((door, index) => (
                        <Card key={index} door={door}/>
                    ))}
                </div>
            </section>
        </main>

        <footer>
            <h3>© 2026 Кованые ворота</h3>
            <p>+7 993 184 46 22</p>
        </footer>
    
    </>
}

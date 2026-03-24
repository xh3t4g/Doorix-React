import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { ContactsPage } from "./pages/ContactsPage";



function App() {
    const [currentPage, setCurrentPage] = useState('home');

    if (currentPage === 'home') return <HomePage setCurrentPage={setCurrentPage}/>;
    if (currentPage === 'delivery') return <DeliveryPage setCurrentPage={setCurrentPage}/>;
    if (currentPage === 'contacts') return <ContactsPage setCurrentPage={setCurrentPage} />;
}

export default App;

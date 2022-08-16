import './App.css';
import {ReservationForm} from "./lib/Reservation/ReservationForm/ReservationForm";
import {Faq} from "./lib/Reservation/FAQ/Faq";

function App() {
    return (
        <div className="App">
            <ReservationForm />
            <Faq />
        </div>
    );
}

export default App;

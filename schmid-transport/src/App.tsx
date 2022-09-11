import './App.css';
import {ReservationOverview} from "./pages/ReservationOverview";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers"

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="App">
                <ReservationOverview/>
            </div>
        </LocalizationProvider>
    );
}

export default App;

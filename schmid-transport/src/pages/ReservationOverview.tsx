import {AppHeader} from "../lib/Header/AppHeader";
import {ReservationForm} from "../lib/Reservation/ReservationForm/ReservationForm";
import {useState} from "react";
import {Faq} from "../lib/Reservation/FAQ/Faq";
import {OverviewContainer} from "../lib/Reservation/PageOverview/OverviewContainer";
import {ContactCards} from "../lib/Reservation/Contacts/ContactCards";

export const ReservationOverview = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <>
            <AppHeader/>
            <OverviewContainer setIsOpen={setIsFormOpen}/>
            <ReservationForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
            <ContactCards />
            <Faq/>
        </>
    )

}
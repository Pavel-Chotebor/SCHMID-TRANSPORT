import {AppHeader} from "../lib/Header/AppHeader";
import {useState} from "react";
import {Faq} from "../lib/Reservation/FAQ/Faq";
import {OverviewContainer} from "../lib/Reservation/PageOverview/OverviewContainer";
import {ContactCards} from "../lib/Reservation/Contacts/ContactCards";
import {ReservationFormModal} from "../lib/Reservation/ReservationForm/ReservationFormModal";

export const ReservationOverview = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <>
            <AppHeader/>
            <OverviewContainer setIsOpen={setIsFormOpen}/>
            <ReservationFormModal isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
            <ContactCards/>
            <Faq/>
        </>
    )

}
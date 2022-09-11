import {AppHeader} from "../lib/Header/AppHeader";
import {useState} from "react";
import {Faq} from "../lib/Reservation/FAQ/Faq";
import {OverviewContainer} from "../lib/Reservation/PageOverview/OverviewContainer";
import {ContactSection} from "../lib/Reservation/Contacts/ContactSection";
import {ReservationFormModal} from "../lib/Reservation/ReservationForm/ReservationFormModal";
import {ImgListOverview} from "../lib/Reservation/ImgList/ImgListOverview";
import {PriceList} from "../lib/Reservation/PriceList/PriceList";

export const ReservationOverview = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    return (
        <>
            <AppHeader/>
            <OverviewContainer setIsOpen={setIsFormOpen}/>
            {/*<PriceList />*/}
            <ReservationFormModal isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
            <ContactSection/>
            <Faq/>
        </>
    )

}
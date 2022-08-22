import {ReservationForm} from "./ReservationForm";
import {Drawer, Modal, useMediaQuery} from "@mui/material";

interface ReservationFormModalProps {
    isFormOpen: boolean
    setIsFormOpen: (val: boolean) => void
}

export const ReservationFormModal = ({isFormOpen, setIsFormOpen}: ReservationFormModalProps) => {
    const matches = !useMediaQuery('(min-width:600px)');

    return matches ?
        <Drawer sx={{
            backdropFilter: "blur(3px)",
        }} anchor={"bottom"} open={isFormOpen} onClose={setIsFormOpen} title={"rezervace"}>
            <ReservationForm setIsFormOpen={setIsFormOpen}/>
        </Drawer>
        : <Modal sx={{
            backdropFilter: "blur(3px)",
        }} open={isFormOpen} onClose={setIsFormOpen} title={"rezervace"}>
            <ReservationForm setIsFormOpen={setIsFormOpen}/>
        </Modal>

}
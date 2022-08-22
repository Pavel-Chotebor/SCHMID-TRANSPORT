import {Button, Typography, useMediaQuery} from "@mui/material";
import {EventNote} from "@mui/icons-material";

interface OverviewContainerProps {
    setIsOpen: (isOpen: boolean) => void
}

//todo
export const OverviewContainer = ({setIsOpen}: OverviewContainerProps): JSX.Element => {
    const matches = !useMediaQuery('(min-width:1100px)');


    return (
        <div id={"rezervace"}
             style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover"}
             }>
                <img style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                }}
                     src={"https://www.ford.cz/content/dam/guxeu/rhd/central/cvs/2019-transit-van/launch/billboards-3-0/nameplate/ford-transit_van_trail-eu-V363_TRANSIT_TRAIL_FR_3_4_DYNAMIC_SHOT_24_01e-21x9-2160x925-np3.jpg.renditions.original.png"}

                />
            <Button
                variant="outlined" size="large" startIcon={<EventNote/>} onClick={() => setIsOpen(true)} style={
                {
                    borderRadius: 0,
                    background: "rgba(0, 0, 0, .6)",
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%, -40%)",
                    padding: "3rem 6rem",
                    color: "white",
                    fontWeight: 900,
                    border: "5px solid white"
                }
            }>
                <Typography variant={"h5"}>
                    REZERVOVAT
                </Typography>
            </Button>

        </div>
    )
}
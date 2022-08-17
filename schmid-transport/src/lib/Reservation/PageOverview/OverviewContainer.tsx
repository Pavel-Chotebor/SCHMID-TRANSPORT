import {Box, Button, Typography} from "@mui/material";

interface OverviewContainerProps {
    setIsOpen: (isOpen: boolean) => void
}

//todo
export const OverviewContainer = ({setIsOpen}: OverviewContainerProps): JSX.Element => {
    return (
        <>
            <div style={{
                flex: 1,
            }}>
                <img style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover"
                }}
                     src={"https://www.ford.cz/content/dam/guxeu/rhd/central/cvs/2019-transit-van/launch/billboards-3-0/nameplate/ford-transit_van_trail-eu-V363_TRANSIT_TRAIL_FR_3_4_DYNAMIC_SHOT_24_01e-21x9-2160x925-np3.jpg.renditions.original.png"}

                />
            </div>
            <Box display="flex" flexDirection="column">
                <Typography style={{
                    position: "absolute",
                    top: "15%",
                    left: "20%",
                    color: "white",
                    fontFamily: "Caveat, cursive",
                    fontSize: "75px"
                }}>SCHMID</Typography>
                <Typography style={{
                    position: "absolute",
                    top: "23%",
                    left: "21%",
                    color: "white",
                    fontFamily: "Caveat, cursive",
                    fontSize: "75px"
                }}>TRANSPORT</Typography>
                <Button style={{
                    position: "absolute",
                    backgroundColor: "white",
                    padding: "45px",
                    color: "black",
                    top: "40%",
                    left: "24%"
                }} variant="contained" size="large" onClick={() => setIsOpen(true)}>
                    REZERVOVAT
                </Button>
            </Box>
        </>
    )
}
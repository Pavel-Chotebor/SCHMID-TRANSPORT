import {Box, Button, Container, Divider, Grid, Paper, TextField, Typography, useMediaQuery} from "@mui/material";
import {EventNote} from "@mui/icons-material";
import {ReservationTextInput} from "../../Forms/ReservationTextInput";
import {ReservationSelectionBar} from "./ReservationSelectionBar";
import {useState} from "react";
import {ReservationForm} from "../ReservationForm/ReservationForm";
import {ReservationFormModal} from "../ReservationForm/ReservationFormModal";

interface OverviewContainerProps {
    setIsOpen: (isOpen: boolean) => void
}

//todo
export const OverviewContainer = ({setIsOpen}: OverviewContainerProps): JSX.Element => {
    const isPhone = !useMediaQuery('(min-width:600px)');
    const [isModalOpen, setIsModalOpen] = useState(false)

    console.log("isModalOpen ",isModalOpen )

    return (
        <div id={"rezervace"} style={{background: "snow", boxShadow: "30px"}}>
            {isModalOpen && <ReservationFormModal isFormOpen={isModalOpen} setIsFormOpen={setIsModalOpen}/>}
            <Container maxWidth={"xl"}>
                <Grid container alignItems="center"
                      justifyContent="center">
                    <Grid item lg={4}>
                        <Container maxWidth={"sm"}>
                            <Typography variant="h4" fontFamily={"Montserrat, sans-serif"} fontWeight={600}>
                                Looking for a van?
                            </Typography>
                            <Typography textAlign={"left"} variant="h6" fontFamily={"Montserrat, sans-serif"}
                                        fontWeight={200}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Divider sx={{background: "orange", marginTop: "2rem", marginBottom: "2rem"}}/>
                            {isPhone && (
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    variant="outlined" size="large" startIcon={<EventNote sx={{color: "white"}}/>}
                                    style={
                                        {
                                            borderRadius: 6,
                                            boxShadow: "1px 23px 44px -12px rgba(231,166,26,0.63)",
                                            background: "rgb(231,166,26)",
                                            color: "orange",
                                            //fontWeight: 00,
                                            border: "none",
                                            marginTop: "10%"
                                            //  padding: "2rem 4rem",
                                        }
                                    }
                                >
                                    <Typography color="white" variant={"h6"}>
                                        REZERVOVAT
                                    </Typography>
                                </Button>
                            )}
                        </Container>
                    </Grid>
                    {!isPhone ? (
                            <Grid item lg={8}>
                                <img style={{
                                    // borderRadius: "20px 20px 20px 0",
                                    width: "113%",
                                    padding: 0,
                                    marginTop: "10%",
                                    marginBottom: "5%",
                                    //boxShadow: "1px 23px 44px -12px rgba(231,166,26,0.63)",
                                    //transform: "scaleX(-1)"
                                }}
                                    //src={"https://www.ford.cz/content/dam/guxeu/rhd/central/cvs/2019-transit-van/launch/billboards-3-0/nameplate/ford-transit_van_trail-eu-V363_TRANSIT_TRAIL_FR_3_4_DYNAMIC_SHOT_24_01e-21x9-2160x925-np3.jpg.renditions.original.png"}
                                     src={"vanTest1.png"}
                                />
                            </Grid>
                        )
                        : (<img style={{
                            // borderRadius: "20px 20px 20px 0",
                            width: "110%",
                            //marginLeft: "-50%",
                            padding: 0,
                            marginTop: "10%",
                            marginBottom: "5%",
                            //boxShadow: "1px 23px 44px -12px rgba(231,166,26,0.63)",
                            //transform: "scaleX(-1)"
                        }}
                            //src={"https://www.ford.cz/content/dam/guxeu/rhd/central/cvs/2019-transit-van/launch/billboards-3-0/nameplate/ford-transit_van_trail-eu-V363_TRANSIT_TRAIL_FR_3_4_DYNAMIC_SHOT_24_01e-21x9-2160x925-np3.jpg.renditions.original.png"}
                                src={"vanMobile6.png"}
                        />)
                    }
                    <div style={{marginTop: "-15%", zIndex: 100}}>
                        <ReservationSelectionBar onClick={()=>setIsModalOpen(true)}/>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}
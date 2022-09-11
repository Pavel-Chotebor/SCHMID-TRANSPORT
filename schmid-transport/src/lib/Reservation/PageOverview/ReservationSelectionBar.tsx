import {Box, Button, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import {ReservationDatePicker} from "../../Forms/ReservationDatePicker";
import {useForm} from "react-hook-form";
import {EventNote} from "@mui/icons-material";

interface ReservationSelectionBarProps {
    onClick: () => void
}

export const ReservationSelectionBar = ({onClick}:ReservationSelectionBarProps): JSX.Element => {
    const {register, handleSubmit, formState: {errors}, control} = useForm({mode: "onChange"})
    const isMobile = !useMediaQuery('(min-width:600px)');

    return (!isMobile ? (
        <Paper elevation={4} sx={{
            padding: "10px",
            borderRadius: 3,
            boxShadow: "2px 0px 72px 10px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
        }}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <ReservationDatePicker
                        label="Datum Od"
                        control={control}
                        name="DATE_FROM"
                        minDate={new Date()}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ReservationDatePicker
                        label="Datum do"
                        control={control}
                        name="DATE_TO"
                        minDate={new Date()}
                    />
                </Grid>
                <Grid item xs={12} md={4}>

                    <Button
                        onClick={onClick}
                        variant="outlined" size="large" startIcon={<EventNote/>}
                        style={
                            {
                                borderRadius: 6,
                                //boxShadow: "1px 23px 44px -12px rgba(231,166,26,0.63)",
                                //  background: "rgb(231,166,26)",background: "transparent",
                                color: "orange",
                                //fontWeight: 00,
                                border: "none",
                                //  padding: "2rem 4rem",
                            }
                        }
                    >
                        <Typography variant={"h6"}>
                            REZERVOVAT
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    ) : <></>)
}
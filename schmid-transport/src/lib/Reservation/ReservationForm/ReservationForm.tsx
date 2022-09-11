import {Box, Button, Container, Grid, Modal, Paper, TextField, Typography, useMediaQuery} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useForm} from "react-hook-form";
import {ReservationDatePicker} from "../../Forms/ReservationDatePicker";
import {useTransportData} from "../../api/useTrasnportData";
import {useState} from "react";
import {DataLoader} from "../../Forms/DataLoader";
import {useTestData} from "../../api/useTestData";
import {Cancel, Check, ThumbUp} from "@mui/icons-material";
import {useSWRConfig} from "swr";
import {ReservationTextInput} from "../../Forms/ReservationTextInput";
import {FromDataType} from "../../Forms/reservationConstants";
import {ReservationEmailInput} from "../../Forms/ReservationEmailInput";
import {ReservationPhoneInput} from "../../Forms/ReservationPhoneInput";

interface FormValues {
    name: string;
    phoneNumber: string;
    email: string;
    dateFrom: Date;
    dateTo: Date;
}

interface ReservationFormProps {
    setIsFormOpen: (isOpen: boolean) => void
}

export const ReservationForm = ({setIsFormOpen}: ReservationFormProps): JSX.Element => {
    const {register, handleSubmit, formState: {errors}, control} = useForm({mode: "onChange"})
    const [isFetching, setIsFetching] = useState(false)
    const content = useTransportData(isFetching)
    const test = useTestData()
    const {cache, mutate} = useSWRConfig()
    const matches = !useMediaQuery('(min-width:600px)');

    const onFormSubmit = (formData: any) => {
        setIsFetching(true)
    }


    console.log("form")

    return (
        <DataLoader apiState={test} content={<></>} renderSuccess={
            <Container maxWidth={"sm"}>
                <Paper elevation={matches ? 0 : 20}
                       style={{
                           borderRadius: "10px",
                       }}>
                    <DataLoader
                        renderSuccess={
                            <Box flexDirection="column">
                                <Container maxWidth={"sm"}>
                                    <ThumbUp sx={{fontSize: "70px"}}/>
                                    <Typography variant={"h4"}>
                                        Rezervace byla úspěšně vytvořena, vyčkejte na potvrzení, které vám
                                        zašleme
                                        na email.
                                    </Typography>
                                    <Button onClick={() => {
                                        setIsFormOpen(false)
                                        cache.delete("TEST2")
                                        cache.delete("TEST")
                                        setIsFetching(false)
                                        mutate("TEST2")
                                        mutate("TEST")
                                    }
                                    } style={{
                                        padding: "1rem 2rem",
                                        color: "white",
                                        backgroundColor: "black",
                                        width: "90%",
                                        margin: "1rem 1.5rem"
                                    }}>ZAVŘÍT</Button>
                                </Container>
                            </Box>
                        }
                        apiState={content}
                        content={
                                <Paper elevation={0} style={{marginTop: matches ? 0 : "8rem", borderRadius: "10px", marginRight: matches ? 0 : ""}}>
                                    <Typography textAlign={"center"} mt={"2rem"} gutterBottom variant={"h4"}>
                                        PROVÉST REZERVACI
                                    </Typography>
                                    <form onSubmit={handleSubmit(onFormSubmit)}>
                                        <Container maxWidth={"sm"}>
                                            <Box display="flex" flexDirection={"column"}>
                                                <ReservationTextInput
                                                    label={"Jméno"}
                                                    name={FromDataType.NAME}
                                                    register={register}
                                                    errors={errors}/>
                                                <ReservationTextInput
                                                    label={"Příjmení"}
                                                    name={FromDataType.SURNAME}
                                                    register={register}
                                                    errors={errors}
                                                />
                                                <ReservationEmailInput
                                                    register={register}
                                                    errors={errors}
                                                />
                                                <ReservationPhoneInput
                                                    register={register}
                                                    errors={errors}
                                                />
                                                <Box textAlign="center">
                                                    <ReservationDatePicker
                                                        label="Datum Od"
                                                        control={control}
                                                        name="DATE_FROM"
                                                        minDate={new Date()}
                                                    />
                                                    <ReservationDatePicker
                                                        label="Datum do"
                                                        control={control}
                                                        name="DATE_TO"
                                                        minDate={new Date()}
                                                    />
                                                </Box>
                                            </Box>
                                            <Grid container justifyContent={"center"} style={{padding: "4rem"}}>
                                                <Grid item xs={12} lg={6} md={6}>
                                                    <Button
                                                        endIcon={<Check/>}
                                                        style={{
                                                            padding: "1rem 2rem",
                                                            color: "white",
                                                            backgroundColor: "black",
                                                            width: "90%",
                                                            marginLeft: "1rem"
                                                        }}
                                                        type="submit">
                                                        <Typography align={"center"}>
                                                            ULOŽIT
                                                        </Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12} lg={6} md={6}>
                                                    <Button
                                                        style={{
                                                            border: "0.5px solid black",
                                                            padding: "1rem 2rem",
                                                            color: "black",
                                                            backgroundColor: "white",
                                                            width: "90%",
                                                            marginLeft: "1rem"
                                                        }}
                                                        endIcon={<Cancel/>}
                                                        onClick={() => setIsFormOpen(false)}>
                                                        ZRUŠIT
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </form>
                                </Paper>
                        }
                    />
                </Paper>
            </Container>
        }/>
    )
}


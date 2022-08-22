import {Box, Button, Container, Grid, Modal, Paper, TextField, Typography} from "@mui/material";
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
import {createErrorMessage} from "./reservationFormHelper";

interface FormValues {
    name: string;
    phoneNumber: string;
    email: string;
    dateFrom: Date;
    dateTo: Date;
}

export enum FromDataType {
    NAME = "NAME",
    SURNAME = "SURNAME",
    EMAIL = "EMAIL",
    PHONE_NUMBER = "PHONE_NUMBER",
    DATE_FROM = "DATE_FROM",
    DATE_TO = "DATE_TO"
}

const inputStyle = {
    margin: "0.5rem"
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

    const onFormSubmit = (formData: any) => {
        setIsFetching(true)
    }

    return (
        <DataLoader apiState={test} content={<></>} renderSuccess={
            <Container maxWidth={"sm"}>
                <Paper elevation={20}
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Paper elevation={6} style={{marginTop: "6rem", borderTop: "2rem solid black"}}>
                                    <Typography textAlign={"center"} variant={"h4"}>PROVÉST
                                        REZERVACI</Typography>
                                    <form onSubmit={handleSubmit(onFormSubmit)}>
                                        <Container maxWidth={"sm"}>
                                            <Box display="flex" flexDirection={"column"}>
                                                <TextField
                                                    style={inputStyle}
                                                    label="Jméno"
                                                    {...register(FromDataType.NAME, {
                                                        required: true,
                                                        maxLength: 20
                                                    })}
                                                    helperText={
                                                        createErrorMessage(FromDataType.NAME, errors, 20)
                                                    }
                                                />
                                                <TextField
                                                    style={inputStyle}
                                                    label="Příjmení"
                                                    {...register(FromDataType.SURNAME, {
                                                        required: true,
                                                        maxLength: 30
                                                    })}
                                                    helperText={
                                                        createErrorMessage(FromDataType.SURNAME, errors, 30)}
                                                />
                                                <TextField
                                                    style={inputStyle}
                                                    label="email"
                                                    {...register(FromDataType.EMAIL, {
                                                        required: true,
                                                        maxLength: 40,
                                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                                    })}
                                                    helperText={
                                                        createErrorMessage(FromDataType.EMAIL, errors, 40)}
                                                />
                                                <TextField
                                                    style={inputStyle}
                                                    defaultValue={"+420"}
                                                    label="Telefonní číslo ve formátu (+420 xxx xxx xxx)"
                                                    {...register("PHONE_NUMBER", {
                                                        required: true,
                                                        maxLength: 20,
                                                        pattern: /^(\+?420)?(2[0-9]{2}|3[0-9]{2}|4[0-9]{2}|5[0-9]{2}|72[0-9]|73[0-9]|77[0-9]|60[1-8]|56[0-9]|70[2-5]|79[0-9])[0-9]{3}[0-9]{3}$/
                                                    })}
                                                    helperText={createErrorMessage(FromDataType.PHONE_NUMBER, errors, 12)}
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
                            </LocalizationProvider>
                        }
                    />
                </Paper>
            </Container>
        }/>
    )
}


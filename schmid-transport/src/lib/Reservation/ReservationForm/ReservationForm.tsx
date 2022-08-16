import {Box, Button, Container, Grid, Paper, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {useForm} from "react-hook-form";
import {ReservationDatePicker} from "../../Forms/ReservationDatePicker";
import {useTransportData} from "../../api/useTrasnportData";
import {useState} from "react";
import {DataLoader} from "../../Forms/DataLoader";
import {useTestData} from "../../api/useTestData";

interface FormValues {
    name: string;
    phoneNumber: string;
    email: string;
    dateFrom: Date;
    dateTo: Date;
}

enum FromDataType {
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

export const ReservationForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}, control} = useForm()
    const [isFetching, setIsFetching] = useState(false)
    const content = useTransportData(isFetching)
    const test = useTestData()

    const onFormSubmit = (formData: any) => {
        setIsFetching(true)
    }

    return (
        <DataLoader apiState={test} content={<></>} renderSuccess={
            <Container maxWidth={"md"}>
                <Paper elevation={12}>
                    <DataLoader
                        renderSuccess={<h1>{content?.data?.age} </h1>}
                        apiState={content}
                        content={
                            <Grid container justifyContent={"space-evenly"}>
                                <Grid item lg={6}>
                                    <Box>
                                        <h2>SCHMID TRANSPORT</h2>
                                    <img
                                        width="400"
                                        height="247"
                                        src={"https://www.ford.cz/content/dam/guxeu/rhd/central/cvs/transit-van/bodystyles/ford-transit-van-1230x692.jpg.renditions.original.png"}/>
                                    </Box>
                                    </Grid>
                                <Grid item lg={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Paper elevation={6}>
                                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                                <Box display="flex" flexDirection={"column"}>
                                                    <TextField
                                                        style={inputStyle}
                                                        label="Jméno"
                                                        {...register(FromDataType.NAME, {
                                                            required: true,
                                                            maxLength: 20
                                                        })}
                                                        helperText={
                                                            errors?.[FromDataType.NAME]?.type === 'required' && "First name is required"
                                                            || errors.NAME?.type === "maxLength" && "maxLength"
                                                        }
                                                    />
                                                    <TextField
                                                        style={inputStyle}
                                                        label="Příjmení"
                                                        {...register("SURNAME", {required: true, maxLength: 20})}
                                                        helperText={errors.SURNAME?.type === 'required' && "First name is required" || errors.SURNAME?.type === "maxLength" && "maxLength"}
                                                    />
                                                    <TextField
                                                        style={inputStyle}
                                                        label="email"
                                                        {...register("EMAIL", {required: true, maxLength: 20})}
                                                        helperText={errors.EMAIL?.type === 'required' && "First name is required"}
                                                    />
                                                    <TextField
                                                        style={inputStyle}
                                                        label="Telefonní číslo"
                                                        {...register("PHONE_NUMBER", {
                                                            required: true,
                                                            maxLength: 20
                                                        })}
                                                        helperText={errors.PHONE_NUMBER?.type === 'required' && "First name is required"}
                                                    />
                                                    <ReservationDatePicker
                                                        label="Datum Od"
                                                        control={control}
                                                        name="DATE_FROM"
                                                        minDate={new Date()}
                                                        maxDate={new Date(2022, 7, 20)}
                                                    />
                                                    <ReservationDatePicker
                                                        label="Datum do"
                                                        control={control}
                                                        name="DATE_TO"
                                                        minDate={new Date()}
                                                        maxDate={new Date(2022, 7, 20)}
                                                    />

                                                </Box>
                                                <Button variant="contained" size="large" style={{margin: "2rem"}}
                                                        type="submit">ULOŽIT</Button>
                                            </form>
                                        </Paper>
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        }
                    />
                </Paper>
            </Container>
        }/>
    )
}


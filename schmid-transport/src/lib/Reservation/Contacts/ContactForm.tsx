import {ReservationTextInput} from "../../Forms/ReservationTextInput";
import {FromDataType} from "../../Forms/reservationConstants";
import {ReservationEmailInput} from "../../Forms/ReservationEmailInput";
import {ReservationPhoneInput} from "../../Forms/ReservationPhoneInput";
import {useForm} from "react-hook-form";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {Check} from "@mui/icons-material";

export const ContactForm = (): JSX.Element => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"})

    const onSubmit = () => {
        console.log("question")
    }

    return (
        <Paper elevation={20}
               style={{
                   borderRadius: "10px",
                   height: "100%"
               }}>
            <Container maxWidth="md">
                <Box flexDirection="column">
                    <Typography fontSize={16} gutterBottom>
                        Vyplňte formulář a my Vás budeme kontaktovat ohledně vašeho dotazu.
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            errors={errors}/>
                        <ReservationTextInput
                            label={"Dotaz"}
                            name={"QUESTION"}
                            register={register}
                            errors={errors}
                            multiline={true}
                            maxLength={350}
                        />
                        <Button
                            variant="outlined"
                            endIcon={<Check/>}
                            style={{
                                padding: "1rem 2rem",
                              //  color: "white",
                               // backgroundColor: "black",
                                width: "90%",
                                marginLeft: "1rem"
                            }}
                            type="submit">
                            <Typography align={"center"}>
                                ZASLAT DOTAZ
                            </Typography>
                        </Button>
                    </form>
                </Box>
            </Container>
        </Paper>
    )
}
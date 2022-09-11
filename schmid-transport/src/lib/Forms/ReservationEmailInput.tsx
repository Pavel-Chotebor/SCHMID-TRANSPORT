import {TextField} from "@mui/material";
import {createErrorMessage} from "./formHelper";
import {FromDataType, ReservationInputInterface} from "./reservationConstants";
import {useStyles} from "./reservationForm.styles";

export const ReservationEmailInput = ({register, errors}: ReservationInputInterface): JSX.Element => {
    const {input} = useStyles()

    return (
        <TextField
            className={input}
            label="email"
            {...register(FromDataType.EMAIL, {
                required: true,
                maxLength: 40,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            })}
            helperText={
                createErrorMessage(FromDataType.EMAIL, errors, 40)}
            fullWidth
            sx={{marginTop: "10px", marginBottom:"10px"}}
        />
    )
}
import {TextField} from "@mui/material";
import {createErrorMessage} from "./formHelper";
import {ReservationInputInterface, FromDataType} from "./reservationConstants";
import {useStyles} from "./reservationForm.styles";

interface ReservationTextInput extends ReservationInputInterface {
    label: string,
    name: string,
    maxLength?:number
    multiline?:boolean,
}

export const ReservationTextInput = ({register, errors, label, name, maxLength = 20, multiline=false}: ReservationTextInput): JSX.Element => {
    const {input} = useStyles()

    return (
        <TextField
            className={input}
            label={label}
            {...register(name, {
                required: true,
                maxLength: maxLength
            })}
            helperText={
                createErrorMessage(name, errors, maxLength)
            }
            multiline={multiline}
            fullWidth
        />
    )
}
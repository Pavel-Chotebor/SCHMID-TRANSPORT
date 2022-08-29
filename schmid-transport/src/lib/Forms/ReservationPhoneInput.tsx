import {TextField} from "@mui/material";
import {createErrorMessage} from "./formHelper";
import {FromDataType, ReservationInputInterface} from "./reservationConstants";
import {useStyles} from "./reservationForm.styles";

export const ReservationPhoneInput = ({register, errors}:ReservationInputInterface):JSX.Element => {
    const PHONE_PREFIX = "+420"
    const {input} = useStyles()

    return (
        <TextField
            className={input}
            defaultValue={PHONE_PREFIX}
            label="Telefonní číslo ve formátu (+420 xxx xxx xxx)"
            {...register(FromDataType.PHONE_NUMBER, {
                required: true,
                maxLength: 20,
                pattern: /^(\+?420)?(2[0-9]{2}|3[0-9]{2}|4[0-9]{2}|5[0-9]{2}|72[0-9]|73[0-9]|77[0-9]|60[1-8]|56[0-9]|70[2-5]|79[0-9])[0-9]{3}[0-9]{3}$/
            })}
            helperText={createErrorMessage(FromDataType.PHONE_NUMBER, errors, 12)}
            fullWidth
        />
    )
}
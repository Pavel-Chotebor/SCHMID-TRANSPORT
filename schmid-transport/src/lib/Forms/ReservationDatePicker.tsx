import {Control, Controller, FieldValues} from "react-hook-form";
import {DatePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";

interface ReservationDatePickerProps {
    control: Control<FieldValues, string>
    label: string;
    name: string;
    minDate?: Date;
    maxDate?: Date;
}

export const ReservationDatePicker = ({
                                          control,
                                          label,
                                          name,
                                          minDate,
                                          maxDate
                                      }: ReservationDatePickerProps): JSX.Element =>
    <Controller
        name={name}
        control={control}
        render={({field: {onChange, value}}) => (
            <div style={{margin: "0.3rem"}}>
                <DatePicker
                    label={label}
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={minDate}
                    maxDate={maxDate}
                    showToolbar
                    toolbarTitle={label}
                />
            </div>
        )}
    />

import {Control, Controller, FieldValues} from "react-hook-form";
import {DatePicker, PickersDay} from "@mui/x-date-pickers";
import {Badge, TextField} from "@mui/material";

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
                                      }: ReservationDatePickerProps): JSX.Element => {

    const dates = [new Date(2022, 7, 21), new Date(2022, 7, 22)]

    return (
        <Controller
            name={name}
            control={control}
            render={({field: {onChange, value}}) => (
                <div style={{margin: "0.3rem"}}>
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={onChange}
                        renderInput={(params) => < TextField {...params} sx={{border: "orange"}} />}
                        minDate={minDate}
                        showToolbar
                        toolbarTitle={label}
                        renderDay={(day, _value, DayComponentProps) => {
                            const isSelected = dates.find(d => d.getTime() === day.getTime())

                            return (
                                isSelected ? (
                                        <Badge
                                            key={day.toString()}
                                            overlap="circular"
                                            badgeContent={isSelected ? '🚗' : undefined}
                                        >
                                            <PickersDay {...DayComponentProps} disabled />
                                        </Badge>
                                    )
                                    : <PickersDay {...DayComponentProps} />
                            );
                        }}
                    />
                </div>
            )}
        />
    )
}

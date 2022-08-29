import {FieldErrors, FieldValues} from "react-hook-form";

export interface ReservationInputInterface {
    register: any,
    errors:  FieldErrors<FieldValues>
}

export enum FromDataType {
    NAME = "NAME",
    SURNAME = "SURNAME",
    EMAIL = "EMAIL",
    PHONE_NUMBER = "PHONE_NUMBER",
    DATE_FROM = "DATE_FROM",
    DATE_TO = "DATE_TO"
}

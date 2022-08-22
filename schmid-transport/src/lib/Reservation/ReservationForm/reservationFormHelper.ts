import {FromDataType} from "./ReservationForm";
import {FieldErrors, FieldValues} from "react-hook-form";


export const createErrorMessage = (formDataType: FromDataType, errors: FieldErrors<FieldValues>, maxLength: number): string => {
    const REQUIRED = "required"
    const MAX_LENGTH = "maxLength"
    const PATTERN = "pattern"
    return errors?.[formDataType]?.type === REQUIRED ? "povinné pole"
        : errors?.[formDataType]?.type === MAX_LENGTH ? `maximální délka je ${maxLength} znaků` : errors?.[formDataType]?.type === PATTERN ? "chybný formát"
            : ""
}
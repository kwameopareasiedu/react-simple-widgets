import React from "react";
import { DatePickerMode, IDateField } from "../../../types";
import { CustomField } from "../custom-field";
import { DatePicker } from "../../picker/date-picker";

/** DateField is a form wrapper for the DatePicker widget */
export const DateField = ({
    name,
    label,
    format = "YYYY-MM-DD",
    mode = DatePickerMode.SINGLE,
    displayFormat = "dddd, Do MMMM YYYY",
    errorTransformer,
    decoration,
    validator,
    onChange,
    onFocus,
    onBlur
}: IDateField) => {
    return (
        <div className="react-simple-widget date-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <DatePicker
                        date={value}
                        mode={mode}
                        label={label}
                        format={format}
                        error={touched && error}
                        displayFormat={displayFormat}
                        decoration={decoration}
                        validator={validator}
                        onChange={(date) => {
                            setValue(date);
                            if (onChange) onChange(date);
                        }}
                        onFocus={() => {
                            setTouched(true);
                            if (onFocus) onFocus();
                        }}
                        onBlur={onBlur}
                    />
                )}
            </CustomField>
        </div>
    );
};

import React from "react";
import { CustomField } from "../custom-field";
import { DatePicker } from "../date-picker";
import { DateField as Props } from "./types";

/** DateField is a form wrapper for the DatePicker widget */
export const DateField = ({
    name,
    mode,
    label,
    leading,
    trailing,
    format = "YYYY-MM-DD",
    displayFormat = "dddd, Do MMMM YYYY",
    stickyFloatingLabel,
    errorTransformer,
    decoration,
    validator,
    onChange,
    onFocus,
    onBlur
}: Props) => {
    return (
        <div className="react-simple-widget date-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <DatePicker
                        date={value}
                        mode={mode}
                        label={label}
                        format={format}
                        leading={leading}
                        trailing={trailing}
                        error={touched && error}
                        stickyFloatingLabel={stickyFloatingLabel}
                        displayFormat={displayFormat}
                        decoration={decoration}
                        validator={validator}
                        onChange={date => {
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

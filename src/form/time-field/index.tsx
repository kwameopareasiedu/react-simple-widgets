import React from "react";
import { TimeField as Props } from "./types";
import { CustomField } from "../custom-field";
import { TimePicker } from "../time-picker";

/** TimeField is a form wrapper for the TimePicker widget */
export const TimeField = ({
    name,
    label,
    leading,
    trailing,
    decoration,
    stickyFloatingLabel,
    errorTransformer,
    validator,
    onChange,
    onFocus,
    onBlur
}: Props) => {
    return (
        <div className="react-simple-widget time-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <TimePicker
                        time={value}
                        label={label}
                        leading={leading}
                        trailing={trailing}
                        stickyFloatingLabel={stickyFloatingLabel}
                        error={touched && error}
                        decoration={decoration}
                        validator={validator}
                        onChange={time => {
                            setValue(time);
                            if (onChange) onChange(time);
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

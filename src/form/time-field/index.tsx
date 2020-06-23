import React from "react";
import { ITimeField } from "../../../types";
import { CustomField } from "../custom-field";
import { TimePicker } from "../../picker/time-picker";

/** TimeField is a form wrapper for the TimePicker widget */
export const TimeField = ({ name, label, errorTransformer, decoration, validator, onChange, onFocus, onBlur }: ITimeField) => {
    return (
        <div className="react-simple-widget time-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <TimePicker
                        time={value}
                        label={label}
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

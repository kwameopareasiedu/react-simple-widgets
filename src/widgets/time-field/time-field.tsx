import "./time-field.scss";
import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TimeField as ITimeField } from "../../../types";
import { TimePicker } from "../time-picker/time-picker";

export const TimeField = ({
    name,
    label,
    helper,
    leading,
    trailing,
    disabled,
    onChange,
    onFocus,
    onBlur,
    ...rest
}: ITimeField): any => {
    return (
        <div className="react-simple-widget time-field">
            <CustomField name={name}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration
                        label={label}
                        leading={leading}
                        trailing={trailing}
                        error={touched && error}
                        helper={helper}
                        disabled={disabled}>
                        {({ onFieldFocus, onFieldBlur }) => (
                            <TimePicker
                                value={value || undefined}
                                onChange={time => {
                                    setValue(time);
                                    if (onChange) onChange(time);
                                }}
                                onFocus={e => {
                                    onFieldFocus();
                                    setTouched(true);
                                    if (onFocus) onFocus(e);
                                }}
                                onBlur={e => {
                                    onFieldBlur();
                                    if (onBlur) onBlur(e);
                                }}
                                {...rest}
                            />
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

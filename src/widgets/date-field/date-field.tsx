import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { DateField as IDateField } from "../../../types";
import { DatePicker } from "../date-picker/date-picker";

export const DateField = ({
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
}: IDateField): any => {
    return (
        <div className="react-simple-widget date-field">
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
                            <DatePicker
                                value={value}
                                onChange={date => {
                                    setValue(date);
                                    if (onChange) onChange(date);
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

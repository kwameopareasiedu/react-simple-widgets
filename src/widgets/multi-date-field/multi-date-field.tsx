import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { MultiDateField as IMultiDateField } from "../../../types";
import { MultiDatePicker } from "../multi-date-picker/multi-date-picker";

export const MultiDateField = ({
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
}: IMultiDateField): any => {
    return (
        <div className="react-simple-widget multi-date-field">
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
                            <MultiDatePicker
                                value={value}
                                onChange={dates => {
                                    setValue(dates);
                                    if (onChange) onChange(dates);
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

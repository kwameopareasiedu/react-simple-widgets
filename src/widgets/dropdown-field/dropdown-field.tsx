import "./dropdown-field.scss";
import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { DropdownField as IDropdownField } from "../../../types";

export const DropdownField = ({
    name,
    label,
    helper,
    leading,
    trailing,
    disabled,
    onChange,
    onFocus,
    onBlur,
    children,
    ...rest
}: IDropdownField) => {
    return (
        <div className="react-simple-widget dropdown-field">
            <CustomField name={name}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <FieldDecoration
                        label={label}
                        helper={helper}
                        leading={leading}
                        trailing={trailing}
                        error={touched && error}
                        disabled={disabled}>
                        {({ onFieldFocus, onFieldBlur }): any => (
                            <select
                                name={name}
                                value={value}
                                onChange={e => {
                                    const val = e.target.value;
                                    setValue(val);
                                    if (onChange) onChange(val);
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
                                {...rest}>
                                {children}
                            </select>
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

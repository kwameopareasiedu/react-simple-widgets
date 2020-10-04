import React from "react";
import { CustomField } from "../custom-field";
import { FieldDecoration } from "../field-decoration";
import { DropdownField as Props } from "./types";

/** DropdownField allows the user to select from a list of items in a dropdown menu */
export const DropdownField = ({
    label,
    name,
    children,
    decoration,
    errorTransformer,
    stickyFloatingLabel,
    leading,
    trailing,
    disabled,
    onChange,
    onFocus,
    onBlur,
    ...rest
}: Props) => {
    return (
        <div className="react-simple-widget dropdown-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <FieldDecoration
                        label={label}
                        leading={leading}
                        trailing={trailing}
                        error={touched && error}
                        stickyFloatingLabel={stickyFloatingLabel || !!value}
                        decoration={decoration}
                        disabled={disabled}>
                        {({ onFieldFocus, onFieldBlur }): any => (
                            <select
                                name={name}
                                value={value}
                                onChange={e => {
                                    setValue(e.target.value);
                                    if (onChange) onChange(e);
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

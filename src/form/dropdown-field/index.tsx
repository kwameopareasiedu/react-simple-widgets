import React from "react";
import { CustomField } from "../custom-field";
import { FieldDecoration } from "../field-decoration";
import { FieldDecorationType, IDropdownField } from "../../../types";

/** DropdownField allows the user to select from a list of items in a dropdown menu */
export const DropdownField = ({ label, name, decoration, errorTransformer, children, ...rest }: IDropdownField) => {
    const { className, onChange, onFocus, onBlur, ...restOfRest } = rest;

    return (
        <div className="react-simple-widget dropdown-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <FieldDecoration
                        label={label}
                        error={touched && error}
                        hasValue={decoration === FieldDecorationType.FLOATING_LABEL || !!value}
                        decoration={decoration || FieldDecorationType.FLAT}>
                        {({ onFieldFocus, onFieldBlur }): any => (
                            <select
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
                                {...restOfRest}>
                                {children}
                            </select>
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

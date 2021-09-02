import "./checkbox-field.scss";
import React, { Fragment } from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { CheckBoxField as ICheckBoxField } from "../../../types";

export const CheckboxField = ({ name, label, disabled, onChange, onFocus, ...rest }: ICheckBoxField): any => {
    return (
        <div className="react-simple-widget checkbox-field">
            <CustomField name={name}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration error={touched && error} disabled={disabled}>
                        {() => (
                            <label>
                                <input
                                    name={name}
                                    checked={value}
                                    type="checkbox"
                                    onChange={e => {
                                        setValue(e.target.checked);
                                        if (onChange) onChange(e);
                                    }}
                                    onFocus={e => {
                                        setTouched(true);
                                        if (onFocus) onFocus(e);
                                    }}
                                    {...rest}
                                />

                                <span className="mb-0">{label}</span>
                            </label>
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

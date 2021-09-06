import "./text-field.scss";
import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextField as ITextField } from "../../../types";

export const TextField = ({
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
}: ITextField): any => {
    return (
        <div className="react-simple-widget text-field">
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
                            <input
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
                                {...rest}
                            />
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

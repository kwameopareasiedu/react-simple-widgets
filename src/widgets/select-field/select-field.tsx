import "./select-field.scss";
import React, { Fragment } from "react";
import { CustomField } from "../custom-field/custom-field";
import { SelectField as ISelectField } from "../../../types";
import { SelectOption } from "./select-option";
import { FieldDecoration } from "../field-decoration/field-decoration";

export const SelectField = ({
    name,
    label,
    options,
    inline,
    className: _className,
    onChange,
    ...rest
}: ISelectField): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "select-field"];
        if (_className) classes.push(_className);
        if (inline) classes.push("inline");
        return classes.join(" ");
    };

    return (
        <div className={className()} {...rest}>
            <CustomField name={name}>
                {({ value, error, touched, setValue, setTouched }): any => (
                    <FieldDecoration label={label} error={touched && error}>
                        {() => (
                            <Fragment>
                                {options.map(([optionLabel, optionValue]) => (
                                    <SelectOption
                                        key={optionValue}
                                        label={optionLabel}
                                        selected={value === optionValue}
                                        onSelect={() => {
                                            setValue(optionValue);
                                            if (onChange) onChange(optionValue);
                                        }}
                                        onFocus={() => {
                                            setTouched(true);
                                        }}
                                    />
                                ))}
                            </Fragment>
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

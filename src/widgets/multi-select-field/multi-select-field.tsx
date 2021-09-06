import "./multi-select-field.scss";
import React, { Fragment } from "react";
import { CustomField } from "../custom-field/custom-field";
import { MultiSelectField as IMultiSelectField } from "../../../types";
import { SelectOption } from "../select-field/select-option";
import { FieldDecoration } from "../field-decoration/field-decoration";

export const MultiSelectField = ({
    name,
    label,
    options,
    inline,
    className: _className,
    onChange,
    ...rest
}: IMultiSelectField): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "multi-select-field"];
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
                                        selected={(value || []).includes(optionValue)}
                                        onSelect={() => {
                                            if (!Array.isArray(value)) {
                                                setValue([optionValue]);
                                                if (onChange) onChange([optionValue]);
                                            } else {
                                                const values: Array<any> = value;
                                                const newValue = values.includes(optionValue)
                                                    ? values.filter(v => v !== optionValue)
                                                    : [...values, optionValue];

                                                setValue(newValue);
                                                if (onChange) onChange(newValue);
                                            }
                                        }}
                                        onFocus={() => {
                                            setTouched(true);
                                        }}
                                        multi
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

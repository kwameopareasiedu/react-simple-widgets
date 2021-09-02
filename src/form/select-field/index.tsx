import "./index.scss";
import React from "react";
import { CustomField } from "../../widgets/custom-field/custom-field";
import { SelectField as Props, SelectFieldMode } from "./types";
import { SelectOption, SelectOptionType } from "./select-option";
import { FieldDecoration } from "../../widgets/field-decoration/field-decoration";

/**
 * SelectField allows selection from a short list of options. The DropdownSelect is recommended for
 * larger lists of options. This widget can take the form of a checkbox (for boolean selection), a
 * radio group (for single selection), or a check group (for multi-selections)
 */
export const SelectField = ({ name, label, mode, options, inline, onChange, errorTransformer }: Props): any => {
    return (
        <div className="react-simple-widget select-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setValue, setTouched }): any => (
                    <FieldDecoration label={mode !== undefined ? label : null} error={touched && error}>
                        {(): any => {
                            const interceptOnChange = (value: any): void => {
                                setValue(value);
                                if (onChange) onChange(value);
                            };

                            const interceptOnFocus = (): void => setTouched(true);

                            if (mode === SelectFieldMode.SINGLE) {
                                return options.map(([optionLabel, optionValue]) => (
                                    <SelectOption
                                        key={optionValue}
                                        inline={inline}
                                        value={optionValue}
                                        label={optionLabel}
                                        type={SelectOptionType.RADIO}
                                        selected={value === optionValue}
                                        onChange={(): void => interceptOnChange(optionValue)}
                                        onFocus={interceptOnFocus}
                                    />
                                ));
                            } else if (mode === SelectFieldMode.MULTI) {
                                return options.map(([optionLabel, optionValue]) => (
                                    <SelectOption
                                        key={optionValue}
                                        inline={inline}
                                        value={optionValue}
                                        label={optionLabel}
                                        type={SelectOptionType.CHECK}
                                        selected={value && value.includes(optionValue)}
                                        onFocus={interceptOnFocus}
                                        onChange={(): void => {
                                            const valueType = Object.prototype.toString.call(value);
                                            if (!value || valueType !== "[object Array]")
                                                interceptOnChange([optionValue]);
                                            else if (!value.includes(optionValue))
                                                interceptOnChange([...value, optionValue]);
                                            else interceptOnChange(value.filter((v: any) => v !== optionValue));
                                        }}
                                    />
                                ));
                            } else
                                return (
                                    <SelectOption
                                        value={null}
                                        label={label}
                                        inline={false}
                                        selected={!!value}
                                        type={SelectOptionType.CHECK}
                                        onChange={(): void => interceptOnChange(!value)}
                                        onFocus={interceptOnFocus}
                                    />
                                );
                        }}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

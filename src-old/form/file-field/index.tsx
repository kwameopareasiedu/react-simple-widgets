import React from "react";
import { FileField as Props } from "./types";
import { CustomField } from "../../../src/widgets/custom-field/custom-field";
import { FilePicker } from "../../../src/widgets/file-picker/file-picker";

/** FileField is a form wrapper for the FilePicker widget */
export const FileField = ({
    name,
    label,
    limit,
    extensions,
    decoration,
    leading,
    trailing,
    errorTransformer,
    validator,
    onChange,
    onFocus,
    onBlur
}: Props) => {
    return (
        <div className="react-simple-widget file-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <FilePicker
                        file={value}
                        label={label}
                        limit={limit}
                        leading={leading}
                        trailing={trailing}
                        decoration={decoration}
                        extensions={extensions}
                        error={touched && error}
                        validator={validator}
                        onChange={file => {
                            setValue(file);
                            if (onChange) onChange(file);
                        }}
                        onFocus={() => {
                            setTouched(true);
                            if (onFocus) onFocus();
                        }}
                        onBlur={onBlur}
                    />
                )}
            </CustomField>
        </div>
    );
};

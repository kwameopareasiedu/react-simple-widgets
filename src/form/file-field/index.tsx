import React from "react";
import { IFileField } from "../../../types";
import { CustomField } from "../custom-field";
import { FilePicker } from "../../picker/file-picker";

/** FileField is a form wrapper for the FilePicker widget */
export const FileField = ({ name, label, limit, extensions, decoration, errorTransformer, validator, onFocus, onBlur }: IFileField) => {
    return (
        <div className="react-simple-widget file-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setTouched, setValue }): any => (
                    <FilePicker
                        file={value}
                        label={label}
                        limit={limit}
                        decoration={decoration}
                        extensions={extensions}
                        error={touched && error}
                        validator={validator}
                        onChange={setValue}
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

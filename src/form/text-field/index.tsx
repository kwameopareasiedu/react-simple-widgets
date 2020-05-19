import "react-quill/dist/quill.snow.css";
import "./index.scss";
import React from "react";
import Quill from "react-quill";
import { CustomField } from "../custom-field";
import { FieldDecoration } from "../field-decoration";
import { FieldDecorationType, ITextField, TextFieldMode } from "../../../types";

/** TextField uses the CustomField to provider a textual field to the user. It behaves as a standard input but also doubles down as a WYSIWYG editor */
export const TextField = ({ label, name, decoration, mode = TextFieldMode.INPUT, errorTransformer, placeholder, ...rest }: ITextField): any => {
    const { className, onChange, onFocus, onBlur, onEditorChange, onEditorFocus, onEditorBlur, ...restOfRest } = rest;

    return (
        <div className="react-simple-widget text-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration
                        label={label}
                        error={touched && error}
                        hasValue={mode === TextFieldMode.EDITOR || !!value}
                        decoration={decoration || FieldDecorationType.FLAT}>
                        {({ onFieldFocus, onFieldBlur }) =>
                            mode === TextFieldMode.INPUT ? (
                                <input
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
                                    // Disable placeholder for floating label decoration
                                    placeholder={decoration !== FieldDecorationType.FLOATING_LABEL ? placeholder : null}
                                    {...restOfRest}
                                />
                            ) : (
                                <Quill
                                    value={value}
                                    modules={{
                                        toolbar: [
                                            [{ header: [1, 2, 3, false] }],
                                            ["bold", "italic", "underline", "strike", "blockquote"],
                                            [{ color: [] }, { background: [] }],
                                            [{ font: [] }],
                                            [{ align: [] }],
                                            [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                                            ["link"],
                                            ["clean"]
                                        ]
                                    }}
                                    onChange={content => {
                                        setValue(content);
                                        if (onEditorChange) onEditorChange(content);
                                    }}
                                    onFocus={() => {
                                        onFieldFocus();
                                        setTouched(true);
                                        if (onEditorFocus) onEditorFocus();
                                    }}
                                    onBlur={() => {
                                        onFieldBlur();
                                        if (onEditorBlur) onEditorBlur();
                                    }}
                                    // Disable placeholder for floating label decoration
                                    placeholder={decoration !== FieldDecorationType.FLOATING_LABEL ? placeholder : null}
                                />
                            )
                        }
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

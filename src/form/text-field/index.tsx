import "./quill-snow.scss";
import "./index.scss";
import Quill from "react-quill";
import React from "react";
import { CustomField } from "../../widgets/custom-field/custom-field";
import { FieldDecoration } from "../field-decoration";
import { TextField as Props, TextFieldMode } from "./types";
import { FieldDecorationType } from "../field-decoration/types";

/** TextField uses the CustomField to provider a text field to the user. It behaves as a standard input but also doubles down as a WYSIWYG editor */
export const TextField = ({
    name,
    label,
    mode = TextFieldMode.INPUT,
    errorTransformer,
    decoration,
    leading,
    trailing,
    placeholder,
    disabled,
    onChange,
    onFocus,
    onBlur,
    onEditorChange,
    onEditorFocus,
    onEditorBlur,
    stickyFloatingLabel,
    ...rest
}: Props): any => {
    // Override classname
    rest.className = "";

    const renderInput = (
        value: any,
        setValue: Function,
        setTouched: Function,
        onFieldChange: Function,
        onFieldFocus: Function,
        onFieldBlur: Function
    ): any => {
        return (
            <input
                name={name}
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                    onFieldChange(e.target.value);
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
                {...rest}
            />
        );
    };

    const renderEditor = (
        value: any,
        setValue: Function,
        setTouched: Function,
        onFieldChange: Function,
        onFieldFocus: Function,
        onFieldBlur: Function
    ): any => {
        return (
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
                    onFieldChange(!!content);
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
        );
    };

    return (
        <div className="react-simple-widget text-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration
                        label={label}
                        leading={leading}
                        trailing={trailing}
                        decoration={decoration}
                        error={touched && error}
                        stickyFloatingLabel={stickyFloatingLabel || mode === TextFieldMode.EDITOR || !!value}
                        disabled={disabled}>
                        {({ onFieldFocus, onFieldBlur, onFieldChange }) => {
                            return mode === TextFieldMode.INPUT
                                ? renderInput(value, setValue, setTouched, onFieldChange, onFieldFocus, onFieldBlur)
                                : renderEditor(value, setValue, setTouched, onFieldChange, onFieldFocus, onFieldBlur);
                        }}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

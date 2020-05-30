import "./quill-snow.scss";
import "./index.scss";
import Quill from "react-quill";
import React, { useState } from "react";
import { CustomField } from "../custom-field";
import { FieldDecoration } from "../field-decoration";
import { FieldDecorationType, ITextField, TextFieldMode } from "../../../types";
import PasswordVisibleIcon from "../../assets/eye.svg";
import PasswordHiddenIcon from "../../assets/hide.svg";

/** TextField uses the CustomField to provider a textual field to the user. It behaves as a standard input but also doubles down as a WYSIWYG editor */
export const TextField = ({ label, name, decoration, mode = TextFieldMode.INPUT, errorTransformer, placeholder, type, ...rest }: ITextField): any => {
    const { className, onChange, onFocus, onBlur, onEditorChange, onEditorFocus, onEditorBlur, ...restOfRest } = rest;
    const [passwordVisible, setPasswordVisible] = useState(false);

    const inputType = (): string => {
        if (type !== "password") return type;
        if (passwordVisible) return "text";
        return "password";
    };

    const trailing = (): any => {
        if (type !== "password") return null;
        return (
            <img
                alt="Visibility"
                src={passwordVisible ? PasswordHiddenIcon : PasswordVisibleIcon}
                onClick={(): void => setPasswordVisible(!passwordVisible)}
            />
        );
    };

    return (
        <div className="react-simple-widget text-field">
            <CustomField name={name} errorTransformer={errorTransformer}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration
                        label={label}
                        error={touched && error}
                        hasValue={mode === TextFieldMode.EDITOR || !!value}
                        decoration={decoration || FieldDecorationType.FLAT}
                        trailing={trailing()}>
                        {({ onFieldFocus, onFieldBlur }) =>
                            mode === TextFieldMode.INPUT ? (
                                <input
                                    name={name}
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
                                    type={inputType()}
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

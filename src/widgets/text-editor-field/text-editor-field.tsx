import "./quill-snow.scss";
import "./text-editor-field.scss";
import React from "react";
import { CustomField } from "../custom-field/custom-field";
import { FieldDecoration } from "../field-decoration/field-decoration";
import { TextEditorField as ITextEditorField } from "../../../types";
import Quill from "react-quill";

export const TextEditorField = ({
    name,
    label,
    helper,
    disabled,
    onChange,
    onFocus,
    onBlur
}: ITextEditorField): any => {
    return (
        <div className="react-simple-widget text-editor-field">
            <CustomField name={name}>
                {({ value, error, touched, setValue, setTouched }) => (
                    <FieldDecoration label={label} error={touched && error} helper={helper} disabled={disabled}>
                        {({ onFieldFocus, onFieldBlur }) => (
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
                                    const div = document.createElement("div");
                                    div.innerHTML = content;

                                    setValue(div.textContent ? content : "");
                                    if (onChange) onChange(div.textContent ? content : "");
                                }}
                                onFocus={() => {
                                    onFieldFocus();
                                    setTouched(true);
                                    if (onFocus) onFocus();
                                }}
                                onBlur={() => {
                                    onFieldBlur();
                                    if (onBlur) onBlur();
                                }}
                            />
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

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
    // onEditorChange,
    // onEditorFocus,
    // onEditorBlur,
    ...rest
}: ITextField): any => {
    // const renderEditor = (
    //     value: any,
    //     setValue: Function,
    //     setTouched: Function,
    //     onFieldChange: Function,
    //     onFieldFocus: Function,
    //     onFieldBlur: Function
    // ): any => {
    //     return (
    //         <Quill
    //             value={value}
    //             modules={{
    //                 toolbar: [
    //                     [{ header: [1, 2, 3, false] }],
    //                     ["bold", "italic", "underline", "strike", "blockquote"],
    //                     [{ color: [] }, { background: [] }],
    //                     [{ font: [] }],
    //                     [{ align: [] }],
    //                     [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    //                     ["link"],
    //                     ["clean"]
    //                 ]
    //             }}
    //             onChange={content => {
    //                 setValue(content);
    //                 onFieldChange(!!content);
    //                 if (onEditorChange) onEditorChange(content);
    //             }}
    //             onFocus={() => {
    //                 onFieldFocus();
    //                 setTouched(true);
    //                 if (onEditorFocus) onEditorFocus();
    //             }}
    //             onBlur={() => {
    //                 onFieldBlur();
    //                 if (onEditorBlur) onEditorBlur();
    //             }}
    //             // Disable placeholder for floating label decoration
    //             placeholder={decoration !== FieldDecorationType.FLOATING_LABEL ? placeholder : null}
    //         />
    //     );
    // };

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
                                {...rest}
                            />
                        )}
                    </FieldDecoration>
                )}
            </CustomField>
        </div>
    );
};

import "./index.scss";
import React, { useState } from "react";
import { FieldDecorationType, IFieldDecoration } from "../../../types";

/**
 * FieldDecoration provides the label and error components as well as styling and theming
 * to a form field.
 */
export const FieldDecoration = ({ decoration, label, leading, trailing, error, hasValue, disabled, children }: IFieldDecoration) => {
    const [focused, setFocused] = useState(false);

    const onFieldFocus = (): void => setFocused(true);

    const onFieldBlur = (): void => setFocused(false);

    const className = (): string => {
        decoration = ![null, undefined].includes(decoration) ? decoration : FieldDecorationType.FLAT;

        const classes = ["react-simple-widget", "field-decoration"];
        if (decoration === FieldDecorationType.FLAT) classes.push("flat-decoration");
        if (decoration === FieldDecorationType.UNDERLINE) classes.push("underline-decoration");
        if (decoration === FieldDecorationType.FLOATING_LABEL) classes.push("floating-label-decoration");
        if (hasValue) classes.push("field-decoration-has-value");
        if (disabled) classes.push("field-decoration-disabled");
        if (focused) classes.push("field-decoration-has-focus");
        if (error) classes.push("field-decoration-has-error");
        return classes.join(" ");
    };

    return (
        <div className={className()}>
            <div className="field">
                {label ? <label>{label}</label> : null}
                <div className="widgets">
                    {leading && <span className="leading">{leading}</span>}
                    <div className="widget">{children({ onFieldFocus, onFieldBlur })}</div>
                    {trailing && <span className="trailing">{trailing}</span>}
                </div>
            </div>

            {error ? <div className="error">{error}</div> : null}
        </div>
    );
};

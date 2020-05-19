import "./index.scss";
import React, { useState } from "react";
import { FieldDecorationType, IFieldDecoration } from "../../../types";

/**
 * FieldDecoration provides the label and error components as well as styling and theming
 * to a form field.
 */
export const FieldDecoration = ({ decoration = FieldDecorationType.FLAT, label, error, hasValue, children }: IFieldDecoration) => {
    const [focused, setFocused] = useState(false);

    const onFocus = (): void => setFocused(true);

    const onBlur = (): void => setFocused(false);

    const className = (): string => {
        const classes = ["react-simple-widget", "field-decoration"];
        if (decoration === FieldDecorationType.FLAT) classes.push("flat-decoration");
        if (decoration === FieldDecorationType.UNDERLINE) classes.push("underline-decoration");
        if (decoration === FieldDecorationType.FLOATING_LABEL) classes.push("floating-label-decoration");
        if (hasValue) classes.push("field-decoration-has-value");
        if (focused) classes.push("field-decoration-has-focus");
        if (error) classes.push("field-decoration-has-error");
        return classes.join(" ");
    };

    return (
        <div className={className()}>
            <div className="field">
                {label ? <label>{label}</label> : null}
                <div className="widget">{children({ onFocus, onBlur })}</div>
            </div>

            {error ? <div className="error">{error}</div> : null}
        </div>
    );
};

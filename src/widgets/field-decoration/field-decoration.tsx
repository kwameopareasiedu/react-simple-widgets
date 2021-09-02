import "./field-decoration.scss";
import React, { useState, cloneElement } from "react";
import { FieldDecoration as IFieldDecoration } from "../../../types";

export const FieldDecoration = ({
    label,
    leading,
    trailing,
    error,
    helper,
    disabled,
    children,
    className: _className,
    ...rest
}: IFieldDecoration) => {
    const [focused, setFocused] = useState(false);

    const className = (): string => {
        const classes = ["react-simple-widget", "field-decoration"];

        if (_className) classes.push(_className);
        if (leading) classes.push("has-leading");
        if (trailing) classes.push("has-trailing");
        if (focused) classes.push("has-focus");
        if (error) classes.push("has-error");
        if (helper) classes.push("has-helper");
        if (disabled) classes.push("disabled");

        return classes.join(" ");
    };

    return (
        <div className={className()} {...rest}>
            {label && <label>{label}</label>}

            <div className="field-decoration-content">
                {leading && cloneElement(leading, { className: `leading ${leading.props.className || ""}` })}

                {children({
                    onFieldFocus: (): void => setFocused(true),
                    onFieldBlur: (): void => setFocused(false)
                })}

                {trailing && cloneElement(trailing, { className: `leading ${trailing.props.className || ""}` })}
            </div>

            {(error || helper) && (
                <div className="field-decoration-footer">
                    {error && <div className="error">{error}</div>}
                    {helper && <div className="helper">{helper}</div>}
                </div>
            )}
        </div>
    );
};

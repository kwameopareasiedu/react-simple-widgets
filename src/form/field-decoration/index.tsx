import "./index.scss";
import React, { useEffect, useRef, useState } from "react";
import { FieldDecoration as Props, FieldDecorationType } from "./types";

/** FieldDecoration provides the label, error, leading and trailing widget components to complement an input field */
export const FieldDecoration = ({ decoration, stickyFloatingLabel, label, leading, trailing, error, disabled, children }: Props) => {
    const [focused, setFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [floatingLabelDefaultTop, setFloatingLabelDefaultTop] = useState(0);
    const [floatingLabelFocusedTop, setFloatingLabelFocusedTop] = useState(0);
    const [underlineIndicatorFocusedTop, setUnderlineIndicatorFocusedTop] = useState(0);
    const contentRef = useRef();
    const leadingRef = useRef();
    const labelRef = useRef();

    useEffect(() => {
        if (decoration === FieldDecorationType.FLOATING_LABEL) {
            const labelNode: HTMLElement = labelRef.current;
            const contentNode: HTMLElement = contentRef.current;

            if (labelNode) {
                const labelHeight = labelNode.getBoundingClientRect().height;
                const contentHeight = contentNode.getBoundingClientRect().height;
                setFloatingLabelDefaultTop((contentHeight - labelHeight) / 2);
                setFloatingLabelFocusedTop(-labelHeight / 2);
            }
        } else if (decoration === FieldDecorationType.UNDERLINE) {
            const labelNode: HTMLElement = labelRef.current;
            const contentNode: HTMLElement = contentRef.current;
            let indicatorFocusedTop = contentNode.getBoundingClientRect().height;

            if (labelNode) indicatorFocusedTop += labelNode.getBoundingClientRect().height;
            setUnderlineIndicatorFocusedTop(indicatorFocusedTop + 5);
        }
    }, []);

    const className = (): string => {
        const classes = ["react-simple-widget", "field-decoration"];

        if (decoration === FieldDecorationType.UNDERLINE) classes.push("underline");
        if (decoration === FieldDecorationType.FLOATING_LABEL) classes.push("floating-label");
        if (stickyFloatingLabel || hasValue) classes.push("has-value");
        if (focused) classes.push("has-focus");
        if (error) classes.push("has-error");
        if (disabled) classes.push("disabled");

        return classes.join(" ");
    };

    const onFieldFocus = (): void => setFocused(true);

    const onFieldBlur = (): void => setFocused(false);

    const labelProps: any = {
        ref: labelRef,
        style: {
            "--floating-label-default-top": floatingLabelDefaultTop + "px",
            "--floating-label-default-left": (leadingRef.current ? (leadingRef.current as HTMLElement).getBoundingClientRect().width : 0) + 10 + "px",
            "--floating-label-focused-top": floatingLabelFocusedTop + "px",
            "--floating-label-focused-left": "4px"
        }
    };

    const contentStyle: any = {
        "--underline-after-top": underlineIndicatorFocusedTop + "px"
    };

    return (
        <div className={className()}>
            {label && <label {...labelProps}>{label}</label>}

            <div ref={contentRef} className="field-decoration-content" style={contentStyle}>
                {leading && (
                    <span ref={leadingRef} className="leading">
                        {leading}
                    </span>
                )}

                <div className="widget">{children({ onFieldFocus, onFieldBlur, onFieldChange: setHasValue })}</div>

                {trailing && <span className="trailing">{trailing}</span>}
            </div>

            {error && <div className="error">{error}</div>}
        </div>
    );
};

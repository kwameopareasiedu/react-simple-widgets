import "./busy-button.scss";
import React from "react";
import { BusyButton as IBusyButton } from "../../../types";
import { Loader } from "../loader/loader";

export const BusyButton = ({ busy, invert, disabled, className: _className, children, ...rest }: IBusyButton): any => {
    const className = (): string => {
        const classes = ["react-simple-widget", "busy-button"];
        if (_className) classes.push(_className);
        return classes.join(" ");
    };

    return (
        <button className={className()} disabled={busy || disabled} {...rest}>
            {busy && <Loader className="d-inline" role="status" aria-hidden="true" invert={invert} />}
            {children}
        </button>
    );
};

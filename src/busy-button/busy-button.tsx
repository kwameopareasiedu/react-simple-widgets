import "./busy-button.scss";
import React from "react";
import { BusyButton as IBusyButton } from "../../types";
import { Loader } from "../loader/loader";

export const BusyButton = ({ busy, disabled, className, children, ...rest }: IBusyButton): any => {
    return (
        <button
            className={`react-simple-widget busy-button ${className ? className : ""}`}
            disabled={busy || disabled}
            {...rest}>
            {busy && <Loader className="d-inline" role="status" aria-hidden="true" />}
            {children}
        </button>
    );
};

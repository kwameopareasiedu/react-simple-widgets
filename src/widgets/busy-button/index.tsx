import React from "react";
import { BusyButton as Props } from "./types";
import { Loader } from "../loader";

/** BusyButton is a button widget that displays a spinner when busy is true */
export const BusyButton = ({ busy, disabled, className, children, ...props }: Props): any => {
    return (
        <button className={`react-simple-widget busy-button ${className ? className : ""}`} disabled={busy || disabled} {...props}>
            {busy && <Loader className="d-inline" role="status" aria-hidden="true" />}
            {children}
        </button>
    );
};

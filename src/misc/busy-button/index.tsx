import React from "react";
import { IBusyButton } from "../../../types";

/** BusyButton is a button widget that displays a spinner when busy is true */
export const BusyButton = ({ busy, disabled, children, ...props }: IBusyButton): any => {
    return (
        <button disabled={busy || disabled} {...props}>
            {busy && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />}
            {children}
        </button>
    );
};

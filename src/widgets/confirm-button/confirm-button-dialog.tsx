import "./confirm-button-dialog.scss";
import React from "react";
import { ConfirmButtonDialog as IConfirmButtonDialog } from "../../../types";

export const ConfirmButtonDialog = ({
    helper,
    message,
    confirmButtonClassName: _confirmButtonClassName
}: IConfirmButtonDialog): any => {
    const confirmButtonClassName = (): string => {
        const classes = ["btn", "btn-sm"];
        if (_confirmButtonClassName) classes.push(_confirmButtonClassName);
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget confirm-button-dialog card">
            <div className="card-body">
                <div className="message-container">{message}</div>

                <div className="row">
                    <div className="col-6 d-grid">
                        <button type="button" className={confirmButtonClassName()} onClick={() => helper.dismiss(true)}>
                            Confirm
                        </button>
                    </div>

                    <div className="col-6 d-grid">
                        <button
                            type="button"
                            className="btn btn-light btn-sm"
                            onClick={(): void => helper.dismiss(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

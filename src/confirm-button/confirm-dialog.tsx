import "./confirm-dialog.scss";
import React from "react";
import { DialogHelper } from "../../types";

interface IConfirmDialog {
    message: any;
    confirmButtonClassName: string;
    helper: DialogHelper;
}

export const ConfirmDialog = ({ message, confirmButtonClassName:_confirmButtonClassName, helper }: IConfirmDialog): any => {
    const confirmButtonClassName = (): string => {
        const classes = ["btn", "btn-sm"];
        if (_confirmButtonClassName) classes.push(_confirmButtonClassName);
        return classes.join(" ");
    };

    return (
        <div className="react-simple-widget confirm-dialog card">
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

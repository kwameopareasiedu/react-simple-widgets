import "./confirm-button-dialog.scss";
import React from "react";
import { ConfirmButtonDialogProps } from "../../../types";

export const ConfirmButtonDialog = ({
  helper,
  message,
  confirmButtonClassName,
  cancelButtonClassName
}: ConfirmButtonDialogProps): any => {
  return (
    <div className="react-simple-widget confirm-button-dialog card">
      <div className="card-body">
        <div className="message-container">{message}</div>

        <div className="row">
          <div className="col-6 d-grid">
            <button
              type="button"
              className={confirmButtonClassName || "btn btn-sm btn-primary"}
              onClick={() => helper.dismiss(true)}>
              Confirm
            </button>
          </div>

          <div className="col-6 d-grid">
            <button
              type="button"
              className={cancelButtonClassName || "btn btn-light btn-sm"}
              onClick={(): void => helper.dismiss(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

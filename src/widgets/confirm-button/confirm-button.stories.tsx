import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ConfirmButton } from "./confirm-button";
import { DialogProvider } from "../dialog-provider/dialog-provider";
import { DialogHelper } from "../../../types";

export default { title: "ConfirmButton", component: ConfirmButton };

export const Default = () => {
    const ExampleApp = (): any => {
        const [busy, setBusy] = useState(false);

        const interceptSetBusy = (): void => {
            setBusy(true);
            setTimeout(() => setBusy(false), 2000);
            action("Dialog confirmed")();
        };

        return (
            <div>
                <ConfirmButton
                    busy={busy}
                    className="btn btn-primary btn-sm me-2"
                    message={<p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>}
                    onCancel={action("Dialog dismissed")}
                    onConfirm={interceptSetBusy}>
                    Start
                </ConfirmButton>

                <ConfirmButton
                    busy={busy}
                    className="btn btn-success btn-sm me-2"
                    message={<p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>}
                    onCancel={action("Dialog dismissed")}
                    onConfirm={interceptSetBusy}>
                    Start
                </ConfirmButton>

                <ConfirmButton
                    busy={busy}
                    className="btn btn-warning btn-sm me-2"
                    message={<p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>}
                    onCancel={action("Dialog dismissed")}
                    onConfirm={interceptSetBusy}>
                    Start
                </ConfirmButton>

                <ConfirmButton
                    busy={busy}
                    className="btn btn-danger btn-sm"
                    message={<p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>}
                    onCancel={action("Dialog dismissed")}
                    onConfirm={interceptSetBusy}>
                    Start
                </ConfirmButton>
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

export const CustomConfirmDialog = () => {
    interface ICustomConfirmDialog {
        helper: DialogHelper;
        message: any;
    }

    const CustomConfirmDialog = ({ helper, message }: ICustomConfirmDialog): any => {
        return (
            <div className="card">
                <div className="card-body">
                    <p>
                        <i>
                            <u>{message}</u>
                        </i>
                    </p>

                    <div className="d-grid mb-2">
                        <button type="button" className="btn btn-primary" onClick={() => helper.dismiss(true)}>
                            Confirm
                        </button>
                    </div>

                    <div className="d-grid">
                        <button type="button" className="btn btn-light" onClick={() => helper.dismiss(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const ExampleApp = (): any => {
        const [busy, setBusy] = useState(false);

        const interceptSetBusy = (): void => {
            setBusy(true);
            setTimeout(() => setBusy(false), 2000);
            action("Dialog confirmed")();
        };

        return (
            <div>
                <ConfirmButton
                    busy={busy}
                    className="btn btn-primary btn-sm me-2"
                    message="Proceeding will disable the button for two (2) seconds. Do you want to proceed?"
                    builder={(helper, message) => <CustomConfirmDialog helper={helper} message={message} />}
                    onCancel={action("Dialog dismissed")}
                    onConfirm={interceptSetBusy}>
                    Start (With Custom Confirm Dialog)
                </ConfirmButton>
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { DialogProvider } from "../../provider/dialog-provider";
import { BusyButton } from "../busy-button";
import { ConfirmDialog } from "./index";
import { ConfirmDialogTheme } from "../../../types";

export default { title: "ConfirmDialog", component: ConfirmDialog };

export const usage = () => {
    const ExampleApp = (): any => {
        const [busy, setBusy] = useState(false);

        const interceptSetBusy = (): void => {
            setBusy(true);
            setTimeout(() => setBusy(false), 2000);
            action("Dialog confirmed")();
        };

        return (
            <div>
                <ConfirmDialog onConfirm={interceptSetBusy} theme={ConfirmDialogTheme.ERROR} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-danger">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} theme={ConfirmDialogTheme.WARNING} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-warning">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} theme={ConfirmDialogTheme.INFO} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-info">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} theme={ConfirmDialogTheme.SUCCESS} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-success">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} theme={ConfirmDialogTheme.PRIMARY} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-primary">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

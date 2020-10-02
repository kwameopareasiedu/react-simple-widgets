import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { ConfirmDialog } from "./index";
import { Confirmation } from "./types";
import { BusyButton } from "../busy-button";
import { DialogProvider } from "../../providers/dialog-provider";

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
                <ConfirmDialog onConfirm={interceptSetBusy} type={Confirmation.DANGER} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-danger">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} type={Confirmation.WARNING} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-warning">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} type={Confirmation.INFO} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-info">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} type={Confirmation.SUCCESS} onCancel={action("Dialog dismissed")}>
                    <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                    <BusyButton busy={busy} className="btn btn-success">
                        Start
                    </BusyButton>
                </ConfirmDialog>

                <span>&nbsp;</span>

                <ConfirmDialog onConfirm={interceptSetBusy} type={Confirmation.PRIMARY} onCancel={action("Dialog dismissed")}>
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

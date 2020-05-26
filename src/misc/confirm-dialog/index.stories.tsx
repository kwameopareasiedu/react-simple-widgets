import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { DialogProvider } from "../../provider/dialog-provider";
import { BusyButton } from "../busy-button";
import { ConfirmDialog } from "./index";

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
            <ConfirmDialog onConfirm={interceptSetBusy} onCancel={action("Dialog dismissed")}>
                <p>Proceeding will disable the button for two (2) seconds. Do you want to proceed?</p>
                <BusyButton busy={busy} className="btn btn-primary">
                    Start
                </BusyButton>
            </ConfirmDialog>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

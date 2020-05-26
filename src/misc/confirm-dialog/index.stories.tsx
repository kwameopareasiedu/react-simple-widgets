import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { DialogProvider } from "../../provider/dialog-provider";
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
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                    turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Do you want to proceed?
                </p>
                <button className="btn btn-primary" disabled={busy}>
                    {busy && <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />}
                    Start
                </button>
            </ConfirmDialog>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

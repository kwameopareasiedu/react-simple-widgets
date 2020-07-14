import React, { useContext } from "react";
import { DialogProvider } from "./provider";
import { DialogProviderContext } from "./context";
import { DialogSize, IDialogHelper } from "../../../types";
import { FlashProvider, FlashProviderContext } from "../flash-provider";

export default {
    title: "Dialog Provider",
    component: DialogProvider
};

export const normal = (): any => {
    const Dialog = ({ helper }: { helper: IDialogHelper }): any => {
        return (
            <div className="card">
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                        turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                    </p>

                    <button className="btn btn-secondary btn-sm" onClick={helper.dismiss}>
                        Close dialog
                    </button>
                </div>
            </div>
        );
    };

    const DialogWithReturnValue = ({ helper }: { helper: IDialogHelper }): any => {
        return (
            <div className="card">
                <div className="card-body">
                    <p>Click on a button to send the value to the component which launched it</p>

                    <button className="btn btn-secondary btn-sm" onClick={() => helper.dismiss("A")}>
                        A
                    </button>
                    <span>&nbsp;</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => helper.dismiss("B")}>
                        B
                    </button>
                    <span>&nbsp;</span>
                    <button className="btn btn-secondary btn-sm" onClick={() => helper.dismiss("C")}>
                        C
                    </button>
                    <span>&nbsp;</span>
                    <button className="btn btn-link btn-sm" onClick={() => helper.dismiss()}>
                        Cancel
                    </button>
                </div>
            </div>
        );
    };

    const BackgroundDismissibleDialog = (): any => {
        return (
            <div className="card">
                <div className="card-body">
                    <p className="mb-0 text-center">Click the background to dismiss</p>
                </div>
            </div>
        );
    };

    const ExampleApp = (): any => {
        const { showDialog } = useContext(DialogProviderContext);

        const openDialog = (dialogSize: DialogSize): void => {
            showDialog(helper => <Dialog helper={helper} />, { size: dialogSize });
        };

        const openAllDialogs = (): void => {
            openDialog(DialogSize.SMALL);
            openDialog(DialogSize.MEDIUM);
            openDialog(DialogSize.WIDE);
        };

        const openDialogForValue = () => {
            showDialog(helper => <DialogWithReturnValue helper={helper} />, {
                size: DialogSize.MEDIUM,
                onDialogDismissed: val => {
                    if (val) alert(`Dialog returned a value of ${val}`);
                }
            });
        };

        const openBackgroundDismissibleDialog = (): void => {
            showDialog(() => <BackgroundDismissibleDialog />, { dismissOnBackgroundClick: true });
        };

        return (
            <div>
                <button className="btn btn-primary btn-sm" onClick={(): void => openDialog(DialogSize.SMALL)}>
                    Open small dialog
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-primary btn-sm" onClick={(): void => openDialog(DialogSize.MEDIUM)}>
                    Open medium dialog
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-primary btn-sm" onClick={(): void => openDialog(DialogSize.WIDE)}>
                    Open wide dialog
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-info btn-sm" onClick={openAllDialogs}>
                    Open all dialogs
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-success btn-sm" onClick={openDialogForValue}>
                    Open dialog for value
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-warning btn-sm" onClick={openBackgroundDismissibleDialog}>
                    Open background dismissible dialog
                </button>
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

export const withBind = (): any => {
    const Dialog = ({ helper }: { helper: IDialogHelper }): any => {
        return (
            <div className="card">
                <div className="card-body text-center">
                    <button className="btn btn-success btn-sm" onClick={(): void => helper.flashSuccess("Success", "Test flash message")}>
                        Show success flash message
                    </button>

                    <span>&nbsp;</span>

                    <button className="btn btn-danger btn-sm" onClick={(): void => helper.flashError("Error", "Test flash message")}>
                        Show error flash message
                    </button>

                    <div className="mb-3" />

                    <button className="btn btn-secondary btn-sm" onClick={() => helper.dismiss()}>
                        Close dialog
                    </button>
                </div>
            </div>
        );
    };

    const ExampleApp = (): any => {
        const { showDialog } = useContext(DialogProviderContext);
        const { flashSuccess, flashError } = useContext(FlashProviderContext);

        const openDialog = (): void => {
            showDialog(helper => <Dialog helper={helper} />, {
                bind: { flashSuccess, flashError },
                size: DialogSize.MEDIUM
            });
        };

        return (
            <div style={{ width: "720px", padding: "30px 0", margin: "0 auto" }}>
                <p>
                    This story illustrates the use of the <strong>bind</strong> property of the Provider. The provider tree here is{" "}
                    <code>DialogProvider</code> -&gt; <code>FlashProvider</code> -&gt; <code>App</code>.
                </p>

                <p>
                    Clicking on the button below will open a dialog which makes use of the the <code>FlashProvider&apos;s</code> functions. Trying to
                    access the <code>FlashProviderContext</code> from the dialog will result in an error since the dialog is rendered at the level of
                    the <code>DialogProvider</code> and the <code>FlashProviderContext</code> is not yet defined at that point.
                </p>

                <p>
                    To resolve this, the app uses the <strong>bind</strong> property of the <code>DialogProvider</code> to <strong>hoist</strong> the
                    flash functions from the <code>App</code> to the level of the <code>DialogProvider</code>, making the flash functions available in
                    the dialog
                </p>

                <button className="btn btn-primary btn-sm" onClick={openDialog}>
                    Open dialog
                </button>
            </div>
        );
    };

    return (
        <DialogProvider>
            <FlashProvider>
                <ExampleApp />
            </FlashProvider>
        </DialogProvider>
    );
};

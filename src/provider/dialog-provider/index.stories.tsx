import React, { useContext } from "react";
import { DialogProvider } from "./provider";
import { DialogProviderContext } from "./context";
import { DialogSize, IDialogHelper } from "../../../types";

export default {
    title: "Dialog Provider",
    component: DialogProvider
};

export const usage = (): any => {
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
            </div>
        );
    };

    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

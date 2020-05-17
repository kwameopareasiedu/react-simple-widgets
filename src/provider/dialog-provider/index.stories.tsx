import React, { useContext } from "react";
import { DialogProvider } from "./provider";
import { DialogProviderContext } from "./context";
import { DialogSize } from "../../../types";

const Dialog = ({ dismiss }: any): any => {
    return (
        <div className="card">
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                    turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>

                <button className="btn btn-secondary btn-sm" onClick={dismiss}>
                    Close dialog
                </button>
            </div>
        </div>
    );
};

const DialogWithReturnValue = ({ dismiss }: any): any => {
    return (
        <div className="card">
            <div className="card-body">
                <p>Click on a button to send the value to the component which launched it</p>

                <button className="btn btn-secondary btn-sm" onClick={() => dismiss("A")}>
                    A
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-secondary btn-sm" onClick={() => dismiss("B")}>
                    B
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-secondary btn-sm" onClick={() => dismiss("C")}>
                    C
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-link btn-sm" onClick={() => dismiss()}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

const ExampleApp = (): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const openDialog = (dialogSize: DialogSize): void => {
        showDialog(helper => <Dialog dismiss={helper.dismiss} />, { size: dialogSize });
    };

    const openAllDialogs = (): void => {
        openDialog(DialogSize.SMALL);
        openDialog(DialogSize.MEDIUM);
        openDialog(DialogSize.WIDE);
    };

    const openDialogForValue = () => {
        showDialog(helper => <DialogWithReturnValue dismiss={helper.dismiss} />, {
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

export default {
    title: "Dialog Provider",
    component: DialogProvider
};

export const normalUsage = (): any => {
    return (
        <DialogProvider>
            <ExampleApp />
        </DialogProvider>
    );
};

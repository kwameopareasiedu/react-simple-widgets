import React, { useContext } from "react";
import { DialogProvider } from "./provider";
import { DialogProviderContext } from "./context";
import { DialogSize } from "../../../types";

const DialogContent = ({ onClose }: any): any => {
    return (
        <div className="card">
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                    turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </p>

                <button className="btn btn-secondary btn-sm" onClick={onClose}>
                    Close dialog
                </button>
            </div>
        </div>
    );
};

const ExampleApp = (): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const openDialog = (dialogSize: DialogSize): void => {
        showDialog(helper => <DialogContent onClose={helper.dismiss} />, { size: dialogSize });
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

import React, { useContext } from "react";
import { DialogProvider } from "./provider";
import { DialogProviderContext } from "./context";

const DialogContent = ({ onClose }: any): any => {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
                Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
            </p>

            <button className="btn btn-secondary btn-sm" onClick={onClose}>
                Close dialog
            </button>
        </div>
    );
};

const ExampleApp = (): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const openDialog = (): void => {
        showDialog(helper => <DialogContent onClose={helper.dismiss} />);
    };

    return (
        <div>
            <button className="btn btn-primary btn-sm" onClick={openDialog}>
                Open small dialog
            </button>
            <span>&nbsp;</span>
            <button className="btn btn-primary btn-sm" onClick={openDialog}>
                Open medium dialog
            </button>
            <span>&nbsp;</span>
            <button className="btn btn-primary btn-sm" onClick={openDialog}>
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

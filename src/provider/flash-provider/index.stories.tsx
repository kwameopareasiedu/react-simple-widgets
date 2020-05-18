import React, { useContext } from "react";
import { FlashProvider } from "./provider";
import { FlashProviderContext } from "./context";
import { DialogProvider } from "../dialog-provider";

export default {
    title: "FlashProvider",
    component: FlashProvider
};

export const usage = (): any => {
    const ExampleApp = (): any => {
        const { flashInfo, flashWarning, flashError, flashSuccess } = useContext(FlashProviderContext);
        const message = "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. dignissim pellentesque felis.";

        return (
            <div>
                <button className="btn btn-danger btn-sm" onClick={(): void => flashError("Error", message, () => alert("Dismissed"))}>
                    Flash error
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-warning btn-sm" onClick={(): void => flashWarning("Warning", message, () => alert("Dismissed"))}>
                    Flash warning
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-info btn-sm" onClick={(): void => flashInfo("Info", message, () => alert("Dismissed"))}>
                    Flash info
                </button>
                <span>&nbsp;</span>
                <button className="btn btn-success btn-sm" onClick={(): void => flashSuccess("Success", message, () => alert("Dismissed"))}>
                    Flash success
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

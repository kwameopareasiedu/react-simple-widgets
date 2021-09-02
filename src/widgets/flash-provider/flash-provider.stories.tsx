import React, { useContext } from "react";
import { FlashProvider } from "./flash-provider";
import { FlashProviderContext } from "./flash-provider-context";
import { DialogProvider } from "../dialog-provider/dialog-provider";

export default {
    title: "FlashProvider",
    component: FlashProvider
};

export const Default = (): any => {
    const ExampleApp = (): any => {
        const { flashInfo, flashWarning, flashError, flashSuccess } = useContext(FlashProviderContext);
        const message = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque volutpat mattis eros. ";

        return (
            <div>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={(): void => flashError("Error", <i>{message}</i>, () => alert("Dismissed"))}>
                    Flash error
                </button>
                <span>&nbsp;</span>
                <button
                    className="btn btn-warning btn-sm"
                    onClick={(): void => flashWarning("Warning", <strong>{message}</strong>, () => alert("Dismissed"))}>
                    Flash warning
                </button>
                <span>&nbsp;</span>
                <button
                    className="btn btn-info btn-sm"
                    onClick={(): void => flashInfo("Info", <u>{message}</u>, () => alert("Dismissed"))}>
                    Flash info
                </button>
                <span>&nbsp;</span>
                <button
                    className="btn btn-success btn-sm"
                    onClick={(): void => flashSuccess("Success", message, () => alert("Dismissed"))}>
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

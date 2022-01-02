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
                    className="btn btn-danger btn-sm me-2 mb-2"
                    onClick={(): void => flashError("Error", <i>{message}</i>, () => alert("Dismissed"))}>
                    Flash error
                </button>

                <button
                    className="btn btn-warning btn-sm me-2 mb-2"
                    onClick={(): void => flashWarning("Warning", <strong>{message}</strong>, () => alert("Dismissed"))}>
                    Flash warning
                </button>

                <button
                    className="btn btn-info btn-sm me-2 mb-2"
                    onClick={(): void => flashInfo("Info", <u>{message}</u>, () => alert("Dismissed"))}>
                    Flash info
                </button>

                <button
                    className="btn btn-success btn-sm me-2 mb-2"
                    onClick={(): void => flashSuccess("Success", message, () => alert("Dismissed"))}>
                    Flash success
                </button>

                <button
                    className="btn btn-light btn-sm me-2 mb-2"
                    onClick={(): void => flashSuccess("Success", message, null, { closeTimerMs: 12000 })}>
                    Flash (12s close timer)
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

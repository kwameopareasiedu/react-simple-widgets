import React, { useContext } from "react";
import { DialogBuilder } from "../dialog-provider/types";
import { FlashType, FlashProvider as Props } from "./types";
import { FlashProviderContext } from "./flash-provider-context";
import { DialogProviderContext } from "../dialog-provider";
import { FlashView } from "./flash-view";

// FlashProvider uses the DialogProvider to display flash messages
export const FlashProvider = ({ children }: Props): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const flash = (type: FlashType, title: string, message: any, onFlashDismissed?: () => void): void => {
        const builder: DialogBuilder = helper => <FlashView type={type} title={title} message={message} onDismiss={helper.dismiss} />;
        showDialog(builder, { onDismissed: onFlashDismissed });
    };

    const flashError = (title: string, message?: any, onFlashDismissed?: () => void): void =>
        flash(FlashType.ERROR, title, message, onFlashDismissed);

    const flashWarning = (title: string, message?: any, onFlashDismissed?: () => void): void =>
        flash(FlashType.WARNING, title, message, onFlashDismissed);

    const flashInfo = (title: string, message?: any, onFlashDismissed?: () => void): void =>
        flash(FlashType.INFO, title, message, onFlashDismissed);

    const flashSuccess = (title: string, message?: any, onFlashDismissed?: () => void): void =>
        flash(FlashType.SUCCESS, title, message, onFlashDismissed);

    return <FlashProviderContext.Provider value={{ flashError, flashWarning, flashInfo, flashSuccess }}>{children}</FlashProviderContext.Provider>;
};

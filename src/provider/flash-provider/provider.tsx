import React, { useContext } from "react";
import { FlashProviderContext } from "./context";
import { FlashType, IDialogBuilder, IFlashProvider } from "../../../types";
import { DialogProviderContext } from "../dialog-provider";
import { FlashView } from "./flash-view";

/**
 * The FlashProvider allows an app to display different types of flash messages. FlashProvider uses dialogs to
 * display these flash messages and thus depends on a DialogProvider ancestor to be available up your component
 * tree.
 */
export const FlashProvider = ({ children }: IFlashProvider): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const flash = (type: FlashType, title: string, message: string, onFlashDismissed?: () => void): void => {
        const builder: IDialogBuilder = helper => <FlashView type={type} title={title} message={message} onDismiss={helper.dismiss} />;
        showDialog(builder, { onDialogDismissed: onFlashDismissed });
    };

    const flashError = (title: string, message: string, onFlashDismissed?: () => void): void =>
        flash(FlashType.ERROR, title, message, onFlashDismissed);

    const flashWarning = (title: string, message: string, onFlashDismissed?: () => void): void =>
        flash(FlashType.WARNING, title, message, onFlashDismissed);

    const flashInfo = (title: string, message: string, onFlashDismissed?: () => void): void =>
        flash(FlashType.INFO, title, message, onFlashDismissed);

    const flashSuccess = (title: string, message: string, onFlashDismissed?: () => void): void =>
        flash(FlashType.SUCCESS, title, message, onFlashDismissed);

    return <FlashProviderContext.Provider value={{ flashError, flashWarning, flashInfo, flashSuccess }}>{children}</FlashProviderContext.Provider>;
};

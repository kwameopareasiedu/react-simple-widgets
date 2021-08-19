import React, { useContext } from "react";
import { FlashProvider as Props, FlashType } from "./types";
import { FlashProviderContext } from "./flash-provider-context";
import { DialogProviderContext } from "../../dialog-provider/dialog-provider-context";
import { FlashView } from "./flash-view";

// FlashProvider uses the DialogProvider to display flash messages
export const FlashProvider = ({ children, builder }: Props): any => {
    const { showDialog } = useContext(DialogProviderContext);

    const flash = (
        type: FlashType,
        title: string,
        message: any,
        onFlashDismissed?: () => void,
        btnText?: string
    ): void => {
        showDialog(
            helper => {
                if (builder) {
                    return builder({
                        type,
                        title,
                        message,
                        onFlashDismissed: () => {
                            if (onFlashDismissed) onFlashDismissed();
                            helper.dismiss();
                        },
                        btnText
                    });
                }

                return (
                    <FlashView
                        type={type}
                        title={title}
                        message={message}
                        buttonText={btnText}
                        onDismiss={helper.dismiss}
                    />
                );
            },
            { onDismissed: onFlashDismissed }
        );
    };

    const flashError = (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string): void =>
        flash(FlashType.ERROR, title, message, onFlashDismissed, btnText);

    const flashWarning = (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string): void =>
        flash(FlashType.WARNING, title, message, onFlashDismissed, btnText);

    const flashInfo = (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string): void =>
        flash(FlashType.INFO, title, message, onFlashDismissed, btnText);

    const flashSuccess = (title: string, message?: any, onFlashDismissed?: () => void, btnText?: string): void =>
        flash(FlashType.SUCCESS, title, message, onFlashDismissed, btnText);

    return (
        <FlashProviderContext.Provider value={{ flashError, flashWarning, flashInfo, flashSuccess }}>
            {children}
        </FlashProviderContext.Provider>
    );
};

import "./dialog-provider.scss";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogBuilder, DialogOptions, DialogProvider as IDialogProvider } from "../../../types";
import { DialogProviderContext } from "./dialog-provider-context";
import { DialogView } from "./dialog-view";

export const DialogProvider = ({ children }: IDialogProvider): JSX.Element => {
    const [dialogs, setDialogs] = useState<Array<Dialog>>([]);
    const escapeKeyHandlers = useRef<Array<(e: KeyboardEvent) => void>>([]);
    const bodyOverflowRef = useRef<string>(null);

    const showDialog = (builder: DialogBuilder, options?: DialogOptions): void => {
        const dialog: Dialog = { id: Math.random().toString() };
        const dialogOptions: DialogOptions = options || {};

        const onDismiss = (returnValue?: any) => {
            setDialogs(dialogs => dialogs.filter(d => d !== dialog));
            if (dialogOptions.onDismissed) dialogOptions.onDismissed(returnValue);

            // Remove the associated window escape handler from the stack
            const handler = escapeKeyHandlers.current.splice(0, 1)[0];
            if (handler) window.removeEventListener("keyup", handler);
        };

        dialog.onDismiss = onDismiss;
        dialog.options = dialogOptions;
        dialog.widget = builder({ dismiss: onDismiss });
        setDialogs(dialogs => [...dialogs, dialog]);

        setupDialogWindowEscapeHandler(
            onDismiss,
            dialogOptions.escapeDismissible != undefined ? dialogOptions.escapeDismissible : true
        );

        // TODO: Implement window pop state to handle back button on mobile devices
    };

    const setupDialogWindowEscapeHandler = (dismiss: Function, escapeDismissible: boolean): void => {
        const handler = (e: KeyboardEvent): void => {
            if (e.key === "Escape" && !e.defaultPrevented) {
                e.stopImmediatePropagation();
                e.stopPropagation();

                if (escapeDismissible) {
                    dismiss();
                    escapeKeyHandlers.current = escapeKeyHandlers.current.filter(h => h != handler);
                    window.removeEventListener("keyup", handler);
                }
            }
        };

        // Insert the new handler at the first position
        escapeKeyHandlers.current.unshift(handler);

        // Re-register the handler array so that the new handler receives the keyup event first
        for (const handler of escapeKeyHandlers.current) window.removeEventListener("keyup", handler);
        for (const handler of escapeKeyHandlers.current) window.addEventListener("keyup", handler);
    };

    useEffect(() => {
        if (dialogs.length > 0) {
            if (bodyOverflowRef.current === null) {
                // Store the overflow style to restore when all dialogs are dismissed
                bodyOverflowRef.current = document.body.style.overflow;
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = bodyOverflowRef.current;
            bodyOverflowRef.current = null;
        }
    }, [dialogs]);

    return (
        <DialogProviderContext.Provider value={{ showDialog }}>
            {children}
            <div id="dialog-view-container" className="react-simple-widget">
                {dialogs.map(dialog => (
                    <DialogView key={dialog.id} dialog={dialog} />
                ))}
            </div>
        </DialogProviderContext.Provider>
    );
};

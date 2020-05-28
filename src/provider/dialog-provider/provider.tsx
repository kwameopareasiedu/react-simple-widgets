import "./provider.scss";
import React, { useEffect, useRef, useState } from "react";
import { DialogView, DialogViewHolder } from "./dialog-view";
import { IDialogBuilder, IDialogOptions, IDialogProvider } from "../../../types";
import { DialogProviderContext } from "./context";

type DialogEscapeCallback = (e: KeyboardEvent) => void;

/**
 * The DialogProvider allows for dialogs to be displayed over its children. Because of the top-level nature,
 * dialogs won't interfere with the application's existing CSS, especially the grid implementation across
 * different browsers
 */
export const DialogProvider = ({ children }: IDialogProvider): any => {
    const [dialogHolders, setDialogHolders] = useState<Array<DialogViewHolder>>([]);
    const escapeHandlers = useRef<Array<DialogEscapeCallback>>([]);
    const bodyOverflow = useRef<string>();

    useEffect(() => {
        if (dialogHolders.length > 0) {
            // Store the overflow style to restore when all dialogs are dismissed
            bodyOverflow.current = document.body.style.overflow;
            document.body.style.overflow = "hidden";
        } else document.body.style.overflow = bodyOverflow.current;
    }, [dialogHolders]);

    const showDialog = (dialogBuilder: IDialogBuilder, options?: IDialogOptions): void => {
        const newDialogHolder = new DialogViewHolder();

        // Bind targets are provided by the host to include in the helper object so that they are
        // available in the dialog. This solves the issue where the dialog might need access to
        // other contexts lower than the DialogProvider while the dialog itself is rendered above
        // those contexts.
        // I.e. It allows the host hoist parameters and functions to the dialog rendered above it
        const bindTargets = options && options.bind ? options.bind : {};

        const dismiss = (returnValue: any) => {
            setDialogHolders(dialogHolders => dialogHolders.filter(d => d !== newDialogHolder));
            if (options && options.onDialogDismissed) options.onDialogDismissed(returnValue);
        };

        newDialogHolder.setup(dialogBuilder({ dismiss, ...bindTargets }), options);
        setDialogHolders(dialogHolders => [...dialogHolders, newDialogHolder]);
        setupWindowEscapeHandlerForDialog(dismiss);

        // TODO: Implement window pop state to handle back button on mobile devices
    };

    const setupWindowEscapeHandlerForDialog = (dismiss: Function): void => {
        const handler = (e: KeyboardEvent): void => {
            if (e.key === "Escape" && !e.defaultPrevented) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                dismiss();

                // Remove the handler and unregister it from the window
                escapeHandlers.current = escapeHandlers.current.filter(h => h != handler);
                window.removeEventListener("keyup", handler);
            }
        };

        // Insert the new handler at the first position, so it receives the keyup event first
        escapeHandlers.current.unshift(handler);
        // Re-register the updated escape handler array
        for (const handler of escapeHandlers.current) window.removeEventListener("keyup", handler);
        for (const handler of escapeHandlers.current) window.addEventListener("keyup", handler);
    };

    return (
        <DialogProviderContext.Provider value={{ showDialog }}>
            {children}
            <div id="dialog-view-container" className="react-simple-widget">
                {dialogHolders.map(holder => (
                    <DialogView key={holder.id} dialogHolder={holder} />
                ))}
            </div>
        </DialogProviderContext.Provider>
    );
};

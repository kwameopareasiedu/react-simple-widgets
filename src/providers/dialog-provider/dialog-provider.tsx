import "./dialog-provider.scss";
import React, { useEffect, useRef, useState } from "react";
import { DialogBuilder, DialogOptions, DialogEscapeCallback, DialogProvider as Props } from "./types";
import { DialogProviderContext } from "./dialog-provider-context";
import { DialogView } from "./dialog-view";
import { DialogData } from "./dialog-data";

// Renders and manages dialogs over it's children
export const DialogProvider = ({ children }: Props): any => {
    const [dialogData, setDialogData] = useState<Array<DialogData>>([]);
    const escapeHandlers = useRef<Array<DialogEscapeCallback>>([]);
    const bodyOverflowRef = useRef<string>(null);

    useEffect(() => {
        if (dialogData.length > 0) {
            if (bodyOverflowRef.current === null) {
                // Store the overflow style to restore when all dialogs are dismissed
                bodyOverflowRef.current = document.body.style.overflow;
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = bodyOverflowRef.current;
            bodyOverflowRef.current = null;
        }
    }, [dialogData]);

    // Called from the host application to show a dialog
    const showDialog = (builder: DialogBuilder, options?: DialogOptions): void => {
        const _data = new DialogData();

        const dismiss = (returnValue?: any) => {
            setDialogData(data => data.filter(d => d !== _data));
            if (options && options.onDismissed) options.onDismissed(returnValue);
        };

        const widget = builder({ dismiss });

        _data.setup(widget, dismiss, options);
        setDialogData(data => [...data, _data]);
        setupWindowEscapeHandlerForDialog(dismiss);

        // TODO: Implement window pop state to handle back button on mobile devices
    };

    // Registers a window escape-key listener to dismiss the dialog
    const setupWindowEscapeHandlerForDialog = (dismiss: (returnValue?: any) => void): void => {
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

        // Insert the new handler at the first position
        escapeHandlers.current.unshift(handler);

        // Re-register the handler array so that the new handler receives the keyup event first
        for (const handler of escapeHandlers.current) window.removeEventListener("keyup", handler);
        for (const handler of escapeHandlers.current) window.addEventListener("keyup", handler);
    };

    return (
        <DialogProviderContext.Provider value={{ showDialog }}>
            {children}
            <div id="dialog-view-container" className="react-simple-widget">
                {dialogData.map(data => (
                    <DialogView key={data.id} data={data} />
                ))}
            </div>
        </DialogProviderContext.Provider>
    );
};

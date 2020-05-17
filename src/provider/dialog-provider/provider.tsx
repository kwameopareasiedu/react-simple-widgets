import React, { useState } from "react";
import { DialogProviderContext } from "./context";
import { IDialogHelper, IDialogOptions } from "../../../types";
import { DialogView, DialogViewHolder } from "./dialog-view";
import "./provider.scss";

interface IDialogProvider {
    children: any;
}

/**
 * The DialogProvider allows for dialogs to be displayed over it's children. Because of the top-level nature,
 * dialogs won't interfere with the application's existing CSS, especially the grid implementation across
 * different browsers
 */
export const DialogProvider = ({ children }: IDialogProvider): any => {
    const [dialogHolders, setDialogHolders] = useState<Array<DialogViewHolder>>([]);

    const showDialog = (dialogBuilder: (helper: IDialogHelper) => any, options?: IDialogOptions): void => {
        const newDialogHolder = new DialogViewHolder();
        const dialogHelper: IDialogHelper = { dismiss: () => setDialogHolders(dialogHolders.filter(d => d !== newDialogHolder)) };
        newDialogHolder.setup(dialogBuilder(dialogHelper), options);
        setDialogHolders([...dialogHolders, newDialogHolder]);
    };

    return (
        <DialogProviderContext.Provider value={{ showDialog }}>
            {children}
            <div id="dialog-view-container">
                {dialogHolders.map(holder => (
                    <DialogView key={holder.id} dialogHolder={holder} />
                ))}
            </div>
        </DialogProviderContext.Provider>
    );
};

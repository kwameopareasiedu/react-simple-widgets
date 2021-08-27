import { createContext } from "react";
import { DialogBuilder, DialogOptions } from "./dialog-provider-types";

interface IDialogProviderContext {
    showDialog: (builder: DialogBuilder, options?: DialogOptions) => void;
}

export const DialogProviderContext = createContext<IDialogProviderContext>(null);

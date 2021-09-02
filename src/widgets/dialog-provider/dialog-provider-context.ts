import { createContext } from "react";
import { DialogProviderContext as IDialogProviderContext } from "../../../types";

export const DialogProviderContext = createContext<IDialogProviderContext>(null);

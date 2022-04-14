import { createContext } from "react";
import { DialogProviderContext as DialogProviderContextProps } from "../../../types";

export const DialogProviderContext = createContext<DialogProviderContextProps>(null);

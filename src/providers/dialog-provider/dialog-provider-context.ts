import { createContext } from "react";
import { DialogProviderContext as Props } from "./types";

export const DialogProviderContext = createContext<Props>(null);

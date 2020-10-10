import { createContext } from "react";
import { ValueStoreProviderContext as Props } from "./types";

export const ValueStoreProviderContext = createContext<Props>(null);

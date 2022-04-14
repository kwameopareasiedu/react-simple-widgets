import { createContext } from "react";
import { LocalStorageProviderContext as LocalStorageProviderContextProps } from "../../../types";

export const LocalStorageProviderContext = createContext<LocalStorageProviderContextProps>(null);

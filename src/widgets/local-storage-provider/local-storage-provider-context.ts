import { createContext } from "react";
import { LocalStorageProviderContext as ILocalStorageProviderContext } from "../../../types";

export const LocalStorageProviderContext = createContext<ILocalStorageProviderContext>(null);

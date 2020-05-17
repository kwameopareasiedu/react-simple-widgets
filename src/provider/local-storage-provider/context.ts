import { createContext } from "react";
import { ILocalStorageProviderContext } from "../../../types";

export const LocalStorageProviderContext = createContext<ILocalStorageProviderContext>(null);

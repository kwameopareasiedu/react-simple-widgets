import { createContext } from "react";

export interface ILocalStorageProviderContext {
    getItem: (key: string) => string;
    setItem: (key: string, value: string) => void;
    removeItems: (...keys: Array<string>) => void;
    clear: () => void;
}

export const LocalStorageProviderContext = createContext<ILocalStorageProviderContext>(null);

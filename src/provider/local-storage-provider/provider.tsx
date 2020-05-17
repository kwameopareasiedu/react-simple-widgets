import React, { useState } from "react";
import { ILocalStorageProvider } from "../../../types";
import { LocalStorageProviderContext } from "./context";

/**
 * The LocalStorageProvider provides a reactive wrapper around the localStorage API. It reads specified values on mount
 * and dependents will be updated when the store is modified. This does not provide any layer of security so care must
 * be taken not to store any sensitive data as it is liable to theft if an attacker breaches the sites security.
 */
export const LocalStorageProvider = ({ children, initialKeys = [] }: ILocalStorageProvider): any => {
    // Read values of specified keys from localStorage
    const initialValue: any = {};
    for (const key of initialKeys) initialValue[key] = localStorage.getItem(key);
    const [store, setStore] = useState(initialValue);

    const put = (key: string, value: any, keepInMemoryOnly = false): void => {
        store[key] = value;
        setStore({ ...store });
        if (!keepInMemoryOnly) localStorage.setItem(key, value);
    };

    return <LocalStorageProviderContext.Provider value={{ store, put }}>{children}</LocalStorageProviderContext.Provider>;
};

import React, { useEffect, useState } from "react";
import { IValueStoreProvider, IValueStoreUpdater } from "../../../types";
import { ValueStoreProviderContext } from "./context";
import { Value } from "./value";

/**
 * The ValueStoreProvider provides a global value store for your application. You can use this to persist shared objects
 * across different parts of your application. Each value stored can be configured to be stored only in memory or in
 * the local storage. If initialLocalStorageKeys array is provided, this provider will read the values corresponding
 * to these keys from the local storage and add them to the initial value.
 *
 * NB: It is recommended not to persist sensitive data to the local storage as this has absolutely no layer of security
 */
export const ValueStoreProvider = ({ children, initialLocalStorageKeys = [] }: IValueStoreProvider): any => {
    // Read values of specified initial values from localStorage
    const [values, setValues] = useState(initialLocalStorageKeys.map(key => new Value(key, localStorage.getItem(key), true)));

    useEffect(() => {
        for (const value of values) {
            if (value.isStoredInLocalStorage && !!value.value) localStorage.setItem(value.key, value.value);
            else localStorage.removeItem(value.key);
        }
    }, [values]);

    const get = (key: string): any => {
        const target = values.filter(v => v.key === key).slice(-1)[0];
        return target ? target.value : null;
    };

    const put = (key: string, value: any, storeInLocalStorage?: boolean): void => {
        const existing = values.filter(v => v.key === key)[0];

        if (existing) values[values.indexOf(existing)] = new Value(existing.key, value, storeInLocalStorage);
        else values.push(new Value(key, value, storeInLocalStorage));
        setValues(existing => [...existing, ...values]);
    };

    const update = (key: string, updater: IValueStoreUpdater, storeInLocalStorageIfNotExists?: boolean): void => {
        const existing = values.filter(v => v.key === key)[0];

        if (existing) {
            values.push(new Value(key, updater(existing.value), existing.isStoredInLocalStorage));
            setValues(existing => [...existing, ...values]);
        } else put(key, updater(null), storeInLocalStorageIfNotExists);
    };

    return <ValueStoreProviderContext.Provider value={{ get, put, update }}>{children}</ValueStoreProviderContext.Provider>;
};

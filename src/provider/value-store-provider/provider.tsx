import React, { useEffect, useState } from "react";
import { IValueStoreProvider } from "../../../types";
import { ValueStoreProviderContext } from "./context";

/**
 * The ValueStoreProvider provides a global value store for your application. You can use this to
 * persist shared objects across different parts of your application. Each value stored can be
 * configured to be stored only in memory or in the local storage. If initialLocalStorageKeys array
 * is provided, this provider will read the values corresponding to these keys from the local
 * storage and add them to the initial value.
 *
 * NB: It is recommended not to persist sensitive data to the local storage as this has absolutely
 * no layer of security
 */
export const ValueStoreProvider = ({ children }: IValueStoreProvider): any => {
    // Read values of specified initial values from localStorage
    const persistedKeysKey = "react-simple-widgets-value-store-provider-persisted-keys";
    const [persistedKeys, setPersistedKeys] = useState<Array<string>>(JSON.parse(localStorage.getItem(persistedKeysKey) || "[]"));
    const [items, setItems] = useState(persistedKeys.map(key => new ValueStoreItem(key, localStorage.getItem(key), true)));

    useEffect(() => {
        for (const value of items) {
            if (value.persist && !!value.value) {
                localStorage.setItem(value.key, value.value);
                if (!persistedKeys.includes(value.key)) setPersistedKeys([...persistedKeys, value.key]);
            } else {
                setPersistedKeys(persistedKeys.filter(key => key !== value.key));
                localStorage.removeItem(value.key);
            }
        }
    }, [items]);

    useEffect(() => {
        localStorage.setItem(persistedKeysKey, JSON.stringify(persistedKeys));
    }, [persistedKeys]);

    const get = (key: string): any => {
        const target = items.filter(v => v.key === key).slice(-1)[0];
        return target ? target.value : null;
    };

    const put = (key: string, value: any, persist?: boolean): void => {
        setItems(items => {
            const item = items.filter(v => v.key === key)[0];

            if (item) {
                item.value = value;
                item.persist = persist;
            } else items.push(new ValueStoreItem(key, value, persist));

            return [...items];
        });
    };

    const del = (...keys: Array<string>): void => {
        for (const key of keys) put(key, null, true);
    };

    const clear = (): void => {
        for (const item of items) put(item.key, null, true);
        setPersistedKeys([]);
    };

    return <ValueStoreProviderContext.Provider value={{ get, put, del, clear }}>{children}</ValueStoreProviderContext.Provider>;
};

/**
 * Represents a stored object in the value store
 */
class ValueStoreItem {
    readonly key: string;
    value: any;
    persist: boolean;

    constructor(key: string, value: any, persist: boolean = false) {
        this.key = key;
        this.value = value;
        this.persist = persist;
    }
}

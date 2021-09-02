import React, { useState } from "react";
import { LocalStorageProviderContext } from "./local-storage-provider-context";
import { LocalStorageProvider as ILocalStorageProvider } from "../../../types";

const LOCAL_STORAGE_PROVIDER_KEYS = "react-simple-widgets-local-storage-provider-keys";

const initializeStore = (): any => {
    const values: { [k: string]: any } = {};

    try {
        const storedKeys = localStorage.getItem(LOCAL_STORAGE_PROVIDER_KEYS);
        for (const key of JSON.parse(storedKeys)) {
            values[key] = localStorage.getItem(key);
        }
    } catch (err) {
        console.error(err);
        localStorage.setItem(LOCAL_STORAGE_PROVIDER_KEYS, "[]");
    }

    return values;
};

export const LocalStorageProvider = ({ children }: ILocalStorageProvider): any => {
    const [values, setValues] = useState<{ [k: string]: any }>(initializeStore());

    const getItem = (key: string): any => values[key];

    const setItem = (key: string, value: string): void => {
        setValues(values => ({ ...values, [key]: value }));

        const storedKeys = localStorage.getItem(LOCAL_STORAGE_PROVIDER_KEYS);
        const parsedKeys: Array<string> = JSON.parse(storedKeys);
        if (!parsedKeys.includes(key)) {
            const newKeys = JSON.stringify([...parsedKeys, key]);
            localStorage.setItem(LOCAL_STORAGE_PROVIDER_KEYS, newKeys);
        }
        localStorage.setItem(key, value);
    };

    const removeItems = (...keys: Array<string>): void => {
        setValues(values => {
            for (const key of keys) delete values[key];
            return { ...values };
        });

        const storedKeys = localStorage.getItem(LOCAL_STORAGE_PROVIDER_KEYS);
        const parsedKeys: Array<string> = JSON.parse(storedKeys);
        const updatedKeys = parsedKeys.filter(k => !keys.includes(k));

        for (const key of keys) localStorage.removeItem(key);
        localStorage.setItem(LOCAL_STORAGE_PROVIDER_KEYS, JSON.stringify(updatedKeys));
    };

    const clear = (): void => {
        const storedKeys = localStorage.getItem(LOCAL_STORAGE_PROVIDER_KEYS);
        const parsedKeys: Array<string> = JSON.parse(storedKeys);

        setValues(values => {
            for (const key of parsedKeys) delete values[key];
            return { ...values };
        });

        for (const key of parsedKeys) localStorage.removeItem(key);
        localStorage.setItem(LOCAL_STORAGE_PROVIDER_KEYS, "[]");
    };

    return (
        <LocalStorageProviderContext.Provider value={{ getItem, setItem, removeItems, clear }}>
            {children}
        </LocalStorageProviderContext.Provider>
    );
};

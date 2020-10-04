import React, { useEffect, useState } from "react";
import { ValueStoreProviderContext } from "./value-store-provider-context";
import { ValueStoreProvider as Props } from "./types";
import { ValueStorePair } from "./value-store-pair";

// Provides a global value store for the application
export const ValueStoreProvider = ({ initialKeys, children }: Props): any => {
    // This is the key for array in local storage that holds the keys for values stored by this provider
    const LOCAL_STORAGE_HOLDER_KEY = "react-simple-widgets-value-store-provider-persisted-keys";

    const [keyCache, setKeyCache] = useState<Array<string>>(
        ((): Array<string> => {
            const cache = [...initialKeys];

            try {
                // Read saved keys from local storage, if it exists
                const savedKeys = JSON.parse(localStorage.getItem(LOCAL_STORAGE_HOLDER_KEY) || "[]");
                cache.push(...savedKeys);
            } catch (err) {
                console.error(err);
            }

            // Filter the key cache to prevent duplicates
            return cache.reduce((filtered, key) => {
                if (filtered.includes(key)) return filtered;
                return [...filtered, key];
            }, []);
        })()
    );

    // Read values of specified initial values from localStorage
    const [valueCache, setValueCache] = useState(keyCache.map(key => new ValueStorePair(key, localStorage.getItem(key), true)));

    useEffect(() => {
        for (const { key, value, save } of valueCache) {
            if (save && value) {
                // If "save" is true and the key of the value is not in local storage, save it
                if (!keyCache.includes(key)) setKeyCache(keys => [...keys, key]);
                localStorage.setItem(key, value);
            } else {
                // If "save" is false and the key of the value is in local storage, remove it
                setKeyCache(keys => keys.filter(k => k !== key));
                localStorage.removeItem(key);
            }
        }
    }, [valueCache]);

    useEffect(() => {
        // If the key cache is modified, save it to the local storage
        localStorage.setItem(LOCAL_STORAGE_HOLDER_KEY, JSON.stringify(keyCache));
    }, [keyCache]);

    const get = (key: string): any => {
        // Find the latest entry of the key when searching instead of the first
        const cached = valueCache.filter(v => v.key === key).slice(-1)[0];
        return cached ? cached.value : null;
    };

    const set = (key: string, value: any, save?: boolean): void => {
        setValueCache(values => {
            const cached = values.filter(v => v.key === key)[0];

            if (cached) {
                cached.value = value;
                cached.save = save;
            } else values.push(new ValueStorePair(key, value, save));

            return [...values];
        });
    };

    const del = (...keys: Array<string>): void => {
        for (const key of keys) set(key, null, true);
    };

    const clear = (): void => {
        for (const cached of valueCache) set(cached.key, null, true);
        setKeyCache([]);
    };

    return <ValueStoreProviderContext.Provider value={{ get, set, del, clear }}>{children}</ValueStoreProviderContext.Provider>;
};

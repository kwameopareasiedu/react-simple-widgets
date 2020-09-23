export interface ValueStoreProviderContext {
    get: (key: string) => any;
    set: (key: string, value: any, persist?: boolean) => void;
    del: (...keys: Array<string>) => void;
    clear: () => void;
}

export interface ValueStoreProvider {
    initialKeys?: Array<string>;
    children: any;
}

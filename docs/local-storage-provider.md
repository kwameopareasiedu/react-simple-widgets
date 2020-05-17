[Back to components](../README.md)

# LocalStorageProvider

The LocalStorageProvider provides a reactive wrapper around the localStorage API.
It reads specified values on mount and dependents will be updated when the store is modified.

This widget does not provide any layer of security so care must be taken not to store
any sensitive data as it is liable to theft if an attacker breaches the site's security.

## API

### LocalStorageProvider

`LocalStorageProvider` is a wrapper for your app and provides the react local storage wrapper API

```jsx
ReactDOM.render(
    <LocalStorageProvider initialKeys={[]}>
        <App /> // Children is a required prop
    </LocalStorageProvider>,
    document.getElementById("root")
);
```

-   `initialKeys: Array<string>`

    If specified, the `LocalStorageProvider` reads the values of these keys from the local storage
    before the first render of the children

### LocalStorageProviderContext

`LocalStorageProviderContext` provides the `store` object and `put` function to your component

```jsx
const { store, put } = useContext(LocalStorageProviderContext);
```

#### store

`store` is the read-only storage state object

#### put

`put` triggers the `LocalStorageProvider` to store a value in the local storage. It also updates the
store state object, causing any dependent components to update.

```jsx
put(key, value, keepInMemoryOnly);
```

-   `key: string`

    This is the key under which a value is stored

-   `value: any`

    This is the value to be stored under the specified key

-   `keepInMemoryOnly?: boolean = false`

    If set to true, the value is stored only in the `LocalStorageProvider` and not written to the local storage.
    This is useful if you need to hold some sensitive data using this provider.

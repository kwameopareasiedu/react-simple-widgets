[Home](../README.md)

# ValueStoreProvider

The `ValueStoreProvider` provides a global value store for your application. You can use this to
persist shared objects across different parts of your application. Each value stored can be
configured to be stored only in memory or in the local storage. If initialLocalStorageKeys array is
provided, this provider will read the values corresponding to these keys from the local storage and
add them to the initial value.

**It is recommended not to persist sensitive data to the local storage as this has absolutely no
layer of security**

## API

### ValueStoreProvider

`ValueStoreProvider` is a wrapper for your app and provides the functions to interact with the store

```jsx
ReactDOM.render(
    <ValueStoreProvider initialLocalStorageKeys={[]}>
        <App /> // Children is a required prop
    </ValueStoreProvider>,
    document.getElementById("root")
);
```

-   `initialLocalStorageKeys?: Array<string>`

    If specified, the `ValueStoreProvider` reads the values of these keys from the local storage
    **before** the first render of the children

### ValueStoreProviderContext

`LocalStorageProviderContext` provides the `get`, `store` and `update` functions to your component

```jsx
const { get, put, del } = useContext(ValueStoreProviderContext);
```

#### get

`get` is the function that reads a value from the `ValueStoreProvider`

```jsx
get(key);
```

-   `key: string`

    This is the key under which the value is stored

#### put

`put` stores a value under a specified _key_ in the `ValueStoreProvider`. This will cause any
dependent components to update.

```jsx
put(key, value, persist);
```

-   `key: string`

    This is the key under which a value is stored

-   `value: any`

    This is the value to be stored under the specified key

-   `persist?: boolean = false`

    If set to true, the value is also stored in the localStorage. It is recommended to set this to
    false (default) if you need to hold some sensitive data in memory using this provider.

#### del

`del` removes the values under a specified _keys_ from the `provider. It also removes them from the
local storage if they exist

```jsx
del(...keys);
```

-   `keys: Array<string>`

    The keys whose values are to be removed

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/provider/value-store-provider/index.stories.tsx)

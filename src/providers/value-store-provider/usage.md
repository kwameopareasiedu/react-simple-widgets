[Home](../../../README.md) / ValueStoreProvider

# ValueStoreProvider

The `ValueStoreProvider` provides a global value store for your application. You can use this to
persist shared objects across different parts of your application. Each value stored can be
configured to be stored only in memory or in the local storage.

**It is recommended not to persist sensitive data to the local storage as this has absolutely no
layer of security**

The following guide demonstrates how to use the `ValueStoreProvider`

## Wrap your app with the `ValueStoreProvider` widget

The first step to using the `ValueStoreProvider` widget is to make it an ancestor of your app export.

```jsx
import ReactDOM from "react-dom";
import { ValueStoreProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <ValueStoreProvider initialKeys={[]}>
        <App />
    </ValueStoreProvider>,
    document.getElementById("root")
);
```

This makes the `ValueStoreProvider` context available to the rest of the application. The context
contains the function needed to use the storage functions.

> If you have existing keys in your local storage you want to be managed by the provider, specify
> their keys in `initialKeys` prop

## Persist/Save values within your app

The code example below illustrates how to utilize each function provided by the store

`app.tsx`

```tsx
import { useContext } from "react";
import { ValueStoreProviderContext } from "react-simple-widgets";

export function App() {
    const { get, set, del, clear } = useContext(ValueStoreProviderContext);

    // Save a value to the provider store
    function saveValueInStore(key: string, value: any, storeInLocalStorage = false): void {
        set(key, value, storeInLocalStorage);
    }

    // Delete one or more values from the provider store
    function deleteValueInStore(...keys: Array<string>): void {
        del(...keys);
    }

    // Delete all values from the provider store
    function clearValuesInStore(): void {
        clear();
    }

    return (
        <div id="app">
            {/* When the page is refreshed, Value 1 and Value 2 will preserve their values, but Value 3 will be cleared since it wasn't stored in local storage */}

            <label htmlFor="value-1">Value 1 (Saved in local storage)</label>
            <input id="value-1" value={get("value-1")} onChange={e => saveValueInStore("value-1", e.target.value, true)} />
            <button onClick={() => deleteValueInStore("value-1")}>Clear Value 1</button>

            <label htmlFor="value-2">Value 2 (Saved in local storage)</label>
            <input id="value-2" value={get("value-2")} onChange={e => saveValueInStore("value-2", e.target.value, true)} />
            <button onClick={() => deleteValueInStore("value-2")}>Clear Value 2</button>

            <label htmlFor="value-3">Value 3</label>
            <input id="value-3" value={get("value-3")} onChange={e => saveValueInStore("value-3", e.target.value)} />
            <button onClick={() => deleteValueInStore("value-3")}>Clear Value 3</button>

            <button onClick={clearValuesInStore}>Clear all values in store</button>
        </div>
    );
}
```

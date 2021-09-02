[Home](../../../README.md) / ValueStoreProvider

# LocalStorageProvider

The `LocalStorageProvider` is a value store for your application which syncs changes with the browser's local storage. You can use this to save simple strings across different parts of your application.

**DO NOT store sensitive data to the local storage as this has absolutely no layer of security**

The following guide demonstrates how to use the `LocalStorageProvider`

## Wrap your app with the `LocalStorageProvider` widget

The first step to using the `LocalStorageProvider` widget is to make it an ancestor of your app export.

```jsx
import ReactDOM from "react-dom";
import { LocalStorageProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <LocalStorageProvider>
        <App />
    </LocalStorageProvider>,
    document.getElementById("root")
);
```

This makes the `LocalStorageProvider` context available to the rest of the application. 

## Save values within your app

The code example below illustrates how to utilize each function in the provider

`app.tsx`

```tsx
import { useContext } from "react";
import { LocalStorageProviderContext } from "react-simple-widgets";

export function App() {
    const { getItem, setItem, removeItem, clear } = useContext(LocalStorageProviderContext);

    // Save a value to the provider store
    function saveValueInStore(key: string, value: any): void {
        setItem(key, value);
    }

    // Delete one or more values from the provider store
    function deleteValueInStore(...keys: Array<string>): void {
        removeItem(...keys);
    }

    // Delete all values from the provider store
    function clearValuesInStore(): void {
        clear();
    }

    return (
        <div id="app">
            <label htmlFor="input-1">Value 1 (Saved in local storage)</label>
            <input
                id="input-1"
                value={getItem("value-1")}
                onChange={e => saveValueInStore("value-1", e.target.value, true)}
            />
            <button onClick={() => deleteValueInStore("value-1")}>Clear Value 1</button>

            <label htmlFor="input-2">Value 2 (Saved in local storage)</label>
            <input
                id="input-2"
                value={getItem("value-2")}
                onChange={e => saveValueInStore("value-2", e.target.value, true)}
            />
            <button onClick={() => deleteValueInStore("value-2")}>Clear Value 2</button>

            <label htmlFor="input-3">Value 3</label>
            <input 
                id="input-3" 
                value={getItem("value-3")} 
                onChange={e => saveValueInStore("value-3", e.target.value)} 
            />
            <button onClick={() => deleteValueInStore("value-3")}>Clear Value 3</button>

            <button onClick={clearValuesInStore}>Clear all values in store</button>
        </div>
    );
}
```

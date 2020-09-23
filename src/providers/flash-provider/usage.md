[Home](../../../README.md) / FlashProvider

# FlashProvider

The `FlashProvider` allows your app to display different types of flash messages. `FlashProvider`
uses dialogs to display these flash messages and thus depends on a
[DialogProvider](../dialog-provider/usage.md) ancestor to be available up your component
tree.

The following guide demonstrates how to use the `FlashProvider`

## Wrap your app with the `FlashProvider` widget

The first step to using the `FlashProvider` widget is to make it an ancestor of your app export.
Again, since `FlashProvider` uses dialogs, the `DialogProvider` is also required to be an ancestor.

```jsx
import ReactDOM from "react-dom";
import { ValueStoreProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <DialogProvider>
        <FlashProvider>
            <App />
        </FlashProvider>
    </DialogProvider>,
    document.getElementById("root")
);
```

This makes the `FlashProvider` context available to the rest of the application. The context
contains the function needed to display flash messages.

## Show flash message within your app

The code example below illustrates how to utilize each function provided by the provider context.

`app.tsx`

```tsx
import { useContext } from "react";
import { FlashProviderContext } from "react-simple-widgets";

export function App() {
    const { flashError, flashWarning, flashInfo, flashSuccess } = useContext(FlashProviderContext);
    const message = "This is a flash message";

    return (
        <div id="app">
            <button className="btn btn-danger btn-sm" onClick={(): void => flashError("Error", message, () => alert("Error flash message"))}>
                Flash error
            </button>

            <button
                className="btn btn-warning btn-sm"
                onClick={(): void => flashWarning("Warning", <i>{message}</i>, () => alert("Warning flash message"))}>
                Flash warning
            </button>

            <button
                className="btn btn-info btn-sm"
                onClick={(): void => flashInfo("Info", <strong>{message}</strong>, () => alert("Info flash message"))}>
                Flash info
            </button>

            <button
                className="btn btn-success btn-sm"
                onClick={(): void => flashSuccess("Success", <u>{message}</u>, () => alert("Success flash message"))}>
                Flash success
            </button>
        </div>
    );
}
```

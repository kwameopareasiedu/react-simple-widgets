[Home](../../../README.md) / FlashProvider

# FlashProvider

The `FlashProvider` allows your app to display different types of flash messages. `FlashProvider` uses dialogs to display these flash messages and requires a [DialogProvider](../../dialog-provider/usage.md) ancestor to be available up your component tree.

The following guide demonstrates how to use the `FlashProvider`

## Wrap your app with the `FlashProvider` widget

The first step to using the `FlashProvider` widget is to make it an ancestor of your app export. Again, since `FlashProvider` uses dialogs, the `DialogProvider` is also required to be an ancestor widget.

```jsx
import ReactDOM from "react-dom";
import { DialogProvider, FlashProvider } from "react-simple-widgets";
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

This makes the `FlashProvider` context available to the rest of the application. The context contains the function needed to display flash messages.

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
            <button
                className="btn btn-danger btn-sm"
                onClick={(): void => flashError("Error", message, () => alert("Error"), "OK")}>
                Flash error
            </button>

            <button
                className="btn btn-warning btn-sm"
                onClick={(): void => flashWarning("Warning", <i>{message}</i>, () => alert("Warning"))}>
                Flash warning
            </button>

            <button
                className="btn btn-info btn-sm"
                onClick={(): void => flashInfo("Info", <strong>{message}</strong>, () => alert("Info"))}>
                Flash info
            </button>

            <button
                className="btn btn-success btn-sm"
                onClick={(): void => flashSuccess("Success", <u>{message}</u>, () => alert("Success"))}>
                Flash success
            </button>
        </div>
    );
}
```

Each flash function (`flashError`, `flashWarning`, `flashInfo` and `flashSuccess`) accepts the following arguments in this order:

- `title: string`

  The title of the flash message

- `message?: any`

  The flash message content. This can be a string or a `JSX.Element`

- `onFlashDismissed?: () => void`

  If specified, this function is called when the flash message is dismissed.

- `btnText?: string`

  A custom button text to show on the dismiss button

## Custom Flash Dialogs

If you want to customize the flash message view, you can provider the `builder` function attribute to `FlashProvider`. This function will be passed the flash object and must return a React component to display.

```tsx
import ReactDOM from "react-dom";
import { DialogProvider, FlashProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <DialogProvider>
        <FlashProvider builder={flash => /* Return custom flash view here */}>
            <App />
        </FlashProvider>
    </DialogProvider>,
    document.getElementById("root")
);
```

As seen in the example above, the `builder` method is passed the `flash` object which contains the following data:

- `type: FlashType`

  This is the severity of the flash message. It can be one of `FlashType.ERROR`, `FlashType.WARNING`, `FlashType.INFO` and `FlashType.SUCCESS`.

- `title: string`

  The title of the flash message

- `message: any`

  The content of the flash message. This can be a string or a `JSX.Element`

- `onFlashDismissed?: () => void`

  An optional function to call when the flash is dismissed

- `btnText?: string`

  The dismiss button string. Defaults to "Dismissed"

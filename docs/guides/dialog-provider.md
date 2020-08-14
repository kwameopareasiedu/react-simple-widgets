[Home](../../README.md)

# DialogProvider

The `DialogProvider` provides a dialog API for your app. This widget renders dialogs on top of its
children. This prevents any possible stacking context issues between the full page dialogs and
components of your application (especially issues with any CSS grid you might have).

Follow the steps below to utilize features of the `DialogProvider`

## Wrap your app with the `DialogProvider` widget

```jsx
import { DialogProvider } from "react-simple-widgets";
import { App } from "./app.tsx";

ReactDOM.render(
    <DialogProvider>
        <App />
    </DialogProvider>,
    document.getElementById("root")
);
```

## Use dialogs within your app

In the previous step, we wrapped our app with the `DialogProvider`. This gives our app access to
the dialog functions. In this step, we use it to show a dialog

---

### Show a regular dialog

#### 1. Create the dialog component

`my-dialog.tsx`

```tsx
import { IDialogHelper } from "react-simple-widgets/types";

interface MyDialogProps {
    helper: IDialogHelper;
}

export function MyDialog({ helper }: MyDialogProps) {
    return (
        <div className="card">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

                <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss()}>
                    Close dialog
                </button>
            </div>
        </div>
    );
}
```

#### 2. Show the dialog component from a page

`app.tsx`

```tsx
import { useContext } from "react";
import { DialogProviderContext } from "react-simple-widgets";
import { DialogSize } from "react-simple-widgets/types";
import { MyDialog } from "./my-dialog.tsx";

export function App() {
    const { showDialog } = useContext(DialogProviderContext);

    function openDialog() {
        showDialog(
            function (helper) {
                return <MyDialog helper={helper} />;
            },
            {
                size: DialogSize.SMALL,
                dismissOnBackgroundClick: false // Optional. Defaults to false
            }
        );
    }

    return (
        <div id="app">
            <button className="btn btn-primary" onClick={openDialog}>
                Open dialog
            </button>
        </div>
    );
}
```

A dialog's size can be set to one of `DialogSize.SMALL`, `DialogSize.MEDIUM` or `DialogSize.WIDE`.

---

### Show a value returning dialog

This section illustrates how to show a dialog which returns a value to the caller when dismissed.

#### 1. Create the dialog component

`my-dialog.tsx`

```tsx
import { IDialogHelper } from "react-simple-widgets/types";

interface MyDialogProps {
    helper: IDialogHelper;
}

export function MyDialog({ helper }: MyDialogProps) {
    return (
        <div className="card">
            <div className="card-body">
                <p>Please select role:</p>

                <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("root")}>
                    Root
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("admin")}>
                    Admin
                </button>
                <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("standard")}>
                    Standard
                </button>

                <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss()}>
                    Close dialog without value
                </button>
            </div>
        </div>
    );
}
```

#### 2. Show the dialog component from a page

`app.tsx`

```tsx
import { useContext } from "react";
import { DialogProviderContext } from "react-simple-widgets";
import { DialogSize } from "react-simple-widgets/types";
import { MyDialog } from "./my-dialog.tsx";

export function App() {
    const { showDialog } = useContext(DialogProviderContext);

    function openDialog() {
        showDialog(
            function (helper) {
                return <MyDialog helper={helper} />;
            },
            {
                size: DialogSize.SMALL,
                dismissOnBackgroundClick: false, // Optional. Defaults to false
                onDialogDismissed: val => {
                    if (val) alert(`Dialog returned a value of ${val}`);

                    /*
                        val should be "root", "admin" or "standard". If the dialog was closed
                        without returning a value, val will be undefined so you should check
                        before using the value for anything
                    */
                }
            }
        );
    }

    return (
        <div id="app">
            <button className="btn btn-primary" onClick={openDialog}>
                Open dialog
            </button>
        </div>
    );
}
```

## Sidenotes

> Dialogs can be dismissed when the escape key is pressed. DialogProvider ensures that the most
> recent dialog receives the keyboard event first.

> DialogProvider only controls the positioning and display of your dialogs. The UI of the dialog is
> entirely up to the developer.

## API Reference

View the API reference for this widget to see all options for this widget.
[View API](../api-reference/dialog-provider.md)

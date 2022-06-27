[Home](../../../README.md) / DialogProvider

# DialogProvider

The `DialogProvider` provides a dialog API for your app. This provider renders dialogs on top of your app which prevents any possible stacking context issues with components of your application (especially if you are using CSS grid in that component).

> `DialogProvider` only controls the positioning and display of your dialogs. The UI of the dialog is entirely up to your app.

The following guide demonstrates how to use the `DialogProvider`.

## 1. Wrap your app with the `DialogProvider` widget

The first step to using the `DialogProvider` widget is to make it an ancestor of your app export.

```jsx
import ReactDOM from "react-dom";
import { DialogProvider } from "react-simple-widgets/dist/dialog-provider";
import { App } from "./app.tsx";

ReactDOM.createRoot(
  <DialogProvider>
    <App />
  </DialogProvider>,
  document.getElementById("root")
);
```

This makes the `DialogProvider` context available to the rest of the application. The context contains the function needed to display the dialogs.

## 2. Show dialogs within your app

`DialogProvider` can be used in two (2) ways:

1. Showing a **regular** dialog. This is used to just display information
2. Showing a **value-returning** dialog. This can return a value to the caller when closed

### 2a. Show a regular dialog

First, create a dialog component in a file (We are using `my-dialog.tsx` here).

`my-dialog.tsx`

```tsx
import { DialogHelper } from "react-simple-widgets/types";

interface MyDialogProps {
  helper: DialogHelper;
}

export const MyDialog = ({ helper }: MyDialogProps) => {
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
};
```

Next, we show `MyDialog` from our application.

`app.tsx`

```tsx
import { useContext } from "react";
import { DialogProviderContext } from "react-simple-widgets/dist/dialog-provider";
import { DialogSize } from "react-simple-widgets/types";
import { MyDialog } from "./my-dialog.tsx";

export const App = () => {
  const { showDialog } = useContext(DialogProviderContext);

  const openDialog = () => {
    showDialog(
      function (helper) {
        return <MyDialog helper={helper} />;
      },
      {
        size: DialogSize.SMALL /* Dialog size: SMALL, MEDIUM, WIDE, FULL */,
        backgroundDismissible: false /* Close if background is clicked. Defaults to false */,
        escapeDismissible: true /* Close if escape key is pressed. Defaults to true */,
        onDismissed: () => {} /* Optional function to call after dialog is closed */
      }
    );
  };

  return (
    <div id="app">
      <button className="btn btn-primary btn-sm" onClick={openDialog}>
        Open dialog
      </button>
    </div>
  );
};
```

### 2b. Show a value-returning dialog

This section illustrates how to show a dialog which returns a value to the caller when closed. First, create a dialog component in a file (We are using `my-dialog.tsx` here).

`my-dialog.tsx`

```tsx
import { DialogHelper } from "react-simple-widgets/types";

interface MyDialogProps {
  helper: DialogHelper;
}

export const MyDialog = ({ helper }: MyDialogProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <p>Select a value:</p>

        <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("A")}>
          Return A
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("B")}>
          Return B
        </button>
        <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss("C")}>
          Return C
        </button>

        <button className="btn btn-primary btn-sm" onClick={() => helper.dismiss()}>
          Select none
        </button>
      </div>
    </div>
  );
};
```

Next, we show `MyDialog` from our application. We'll add an `onDismissed` function to our options which is called when the dialog is dismissed.

`app.tsx`

```tsx
import { useContext } from "react";
import { DialogProviderContext } from "react-simple-widgets/dist/dialog-provider";
import { DialogSize } from "react-simple-widgets/types";
import { MyDialog } from "./my-dialog.tsx";

export const App = () => {
  const { showDialog } = useContext(DialogProviderContext);

  function openDialog() {
    showDialog(
      function (helper) {
        return <MyDialog helper={helper} />;
      },
      {
        size: DialogSize.SMALL,
        escapeDismissible: false,
        onDismissed: val => {
          if (val) alert(`Dialog returned a value of ${val}`);

          /*
            val will be "A", "B" or "C". If the dialog was closed without returning a 
            value, val will be undefined so you should check before using the value for 
            anything
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
};
```

### 2c. Send messages from the dialog

This section illustrates how to send messages from a dialog to the host **while it is still open**. First, create a dialog component in a file (We are using `my-dialog.tsx` here).

`my-dialog.tsx`

```tsx
import { DialogHelper } from "react-simple-widgets/types";

interface MyDialogProps {
  helper: DialogHelper;
}

export const MyDialog = ({ helper }: MyDialogProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <p>
          Click the button to send a message to the host <strong>without closing the dialog</strong>
        </p>

        {/* We send a message of "Hello" when this button is pressed */}
        <button className="btn btn-primary btn-sm me-2" onClick={() => helper.send("Hello")}>
          Send message (Hello)
        </button>

        <button className="btn btn-link btn-sm" onClick={helper.dismiss}>
          Close dialog
        </button>
      </div>
    </div>
  );
}
```

Next, we show `MyDialog` from our application. We'll add an `onMessage` function to our options which is called when the dialog sends a message (I.e. when `helper.send()` is called.

`app.tsx`

```tsx
import { useContext } from "react";
import { DialogProviderContext } from "react-simple-widgets/dist/dialog-provider";
import { DialogSize } from "react-simple-widgets/types";
import { MyDialog } from "./my-dialog.tsx";

export const App = () => {
  const { showDialog } = useContext(DialogProviderContext);

  function openDialog() {
    showDialog(
      function (helper) {
        return <MyDialog helper={helper} />;
      },
      {
        size: DialogSize.SMALL,
        escapeDismissible: false,
        onMessage: message => {
          alert(`Dialog sent a message: ${message}`);

          /* message will be "Hello" */
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
};
```


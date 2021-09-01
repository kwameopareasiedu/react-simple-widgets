[Home](../../README.md)

# ConfirmButton

ConfirmButton is a widget that shows a confirmation dialog to confirm an action. Since it is intrinsically a [BusyButton](../busy-button/busy-button.md), it accepts all attributes of a `<button/>` tag.

ConfirmDialog uses dialogs to display the confirmation prompts messages and thus depends on a [DialogProvider](../../dialog-provider/dialog-provider-usage.md) ancestor to be available up your widget tree.

## Usage

```jsx
import ReactDOM from "react-dom";
import { DialogProvider, ConfirmButton } from "react-simple-widgets";

ReactDOM.render(
    <DialogProvider>
        <ConfirmButton
            busy={busy}
            message={message}
            onCancel={onCancel}
            onConfirm={onConfirm}>
            Start
        </ConfirmButton>
    </DialogProvider>,
    document.getElementById("root")
);
```

-   `busy?: boolean`

    If set to `true`, the button is disabled and a spinner icon is displayed within it.
    
-   `message?: any`

    The confirmation message to display in the dialog. This can be a string or a JSX element.

-   `onConfirm: () => void`

    This function is called when the user clicks on the confirm button in the dialog

-   `onCancel?: () => void`

    If specified, this function is called when the confirmation dialog is dismissed

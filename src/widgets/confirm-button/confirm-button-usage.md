[Home](../../../README.md)

# ConfirmButton

This widget shows a confirmation dialog to confirm an action. ConfirmButton is intrinsically a [BusyButton](../busy-button/busy-button.md) and accepts all of its attributes.

ConfirmButton uses dialogs to display the confirmation prompts messages. This requires a [DialogProvider](../../dialog-provider/dialog-provider-usage.md) ancestor to be available up your widget tree.

## Usage

```jsx
import { DialogProvider, ConfirmButton } from "react-simple-widgets";

<DialogProvider>
    <ConfirmButton
        busy={busy}
        message={message}
        onCancel={onCancel}
        onConfirm={onConfirm}>
        Start
    </ConfirmButton>
</DialogProvider>
```

-   `busy?: boolean`

    If set to `true`, the button is disabled and a spinner icon is displayed within it.
    
-   `message?: any`

    The confirmation message to display in the dialog. This can be a string or a JSX element.

-   `onConfirm: () => void`

    This function is called when the user clicks on the confirm button in the dialog

-   `onCancel?: () => void`

    If specified, this function is called when the confirmation dialog is dismissed

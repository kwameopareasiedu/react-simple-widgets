[Home](../../../README.md) / ConfirmButton

# ConfirmButton

This widget shows a confirmation dialog to confirm an action. `ConfirmButton` is intrinsically a [BusyButton](../busy-button/busy-button.md) and accepts all of its attributes.

`ConfirmButton` uses dialogs to display the confirmation prompts messages. This requires a [DialogProvider](../../dialog-provider/dialog-provider-usage.md) ancestor to be available up your widget tree.

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
    
- `message?: any`

  The confirmation message to display in the dialog. This can be a string or a `JSX.Element`.

-   `onConfirm: () => void`

    This function is called when the user clicks on the confirm button in the dialog

-   `onCancel?: () => void`

    If specified, this function is called when the confirmation dialog is dismissed

## Custom Confirmation Dialog

If you want to customize the confirmation dialog, you can provider the `builder` function attribute to `ConfirmButton`. This function will be passed the dialog helper object and the confirmation message and must return a React component to display.

```tsx
import { DialogProvider, ConfirmButton } from "react-simple-widgets";

<DialogProvider>
    <ConfirmButton builder={(helper, message) => /* Return custom confirmation dialog here */}>
        Start
    </ConfirmButton>
</DialogProvider>
```

> The `helper` is a [DialogHelper](../dialog-provider/dialog-provider-usage.md) object. This contains a `dismiss()` function which is used to dismiss the dialog. 

>  When the confirm button in your custom dialog is clicked, ** `helper.dismiss(true)` must be called to trigger the `ConfirmButton` to call the `onConfirm` callback**.  

>  If the cancel button is clicked in your custom dialog, ** `helper.dismiss(false)` must be called to trigger the `ConfirmButton` to call the onCancel callback (if provided)**.


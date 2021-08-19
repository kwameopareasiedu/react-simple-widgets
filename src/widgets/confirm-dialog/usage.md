[Home](../../../README.md)

# ConfirmDialog

ConfirmDialog is a widget that shows a confirmation dialog for an action and calls the action when
the confirmation button is clicked.

ConfirmDialog uses dialogs to display the confirmation prompts messages and thus depends on a
[DialogProvider](../../dialog-provider/usage.md) ancestor to be available up your widget
tree.

## Usage

```jsx
import { ConfirmDialog } from "react-simple-widgets";
import { Confirmation } from "react-simple-widgets/dist/constants";

<ConfirmDialog type={type} onConfirm={onConfirm} onCancel={onCancel}>
    <p>Confirmation message goes here</p>
    <button>Confirm button</button>
</ConfirmDialog>;
```

-   `type?: Confirmation = Confirmation.PRIMARY`

    This represents the theme of the confirm button within the dialog. It can be one of
    `Confirmation.DANGER`, `Confirmation.WARNING`, `Confirmation.INFO`, `Confirmation.SUCCESS` and
    `Confirmation.PRIMARY`. The theme colors are applied from Bootstrap

-   `onConfirm: () => void`

    This function is called when the user clicks on the confirm button in the dialog

-   `onCancel?: () => void`

    If specified, this function is called when the confirmation dialog is dismissed

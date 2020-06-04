[Home](../README.md)

# ConfirmDialog

ConfirmDialog is a widget that shows a confirmation dialog for an action and calls the action when
the confirmation button is clicked. ConfirmDialog uses dialogs to display the confirmation prompts
messages and thus depends on a [DialogProvider](dialog-provider.md) ancestor to be available up your
widgettree.

## API

### ConfirmDialog

```jsx
<ConfirmDialog onConfirm={onConfirm} onCancel={onCancel} />
```

-   `theme?: ConfirmDialogTheme = ConfirmDialogTheme.PRIMARY`

    This represents the theme of the confirm button within the dialog. It can be one of
    `ConfirmDialogTheme.ERROR`, `ConfirmDialogTheme.WARNING`, `ConfirmDialogTheme.INFO`,
    `ConfirmDialogTheme.SUCCESS` and `ConfirmDialogTheme.PRIMARY`. The theme colors are applied
    from Bootstrap

-   `onConfirm: () => void`

    This function is called when the user clicks on the confirm button in the dialog

-   `onCancel?: () => void`

    If specified, this function is called when the confirmation dialog is dismissed

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/misc/confirm-dialog/index.stories.tsx)

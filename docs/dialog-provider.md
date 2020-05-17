[Back to components](../README.md)

# DialogProvider

The DialogProvider provides a dialog API for your app. This widget renders dialogs on top of its children.
This prevents any possible stacking context issues between the dialogs and components of your application
(especially issues with any CSS grid you might have).

## API

### DialogProvider

`DialogProvider` is a wrapper for your app and provides the dialog capabilities

```jsx
ReactDOM.render(
    <DialogProvider>
        <App /> // Children is a required prop
    </DialogProvider>,
    document.getElementById("root")
);
```

### DialogProviderContext

`DialogProviderContext` provides the `showDialog` function to render dialogs

```jsx
const { showDialog } = useContext(DialogProviderContext);
```

#### showDialog

`showDialog` is a function to send a component up to the `DialogProvider` to be rendered in a dialog

```jsx
showDialog(builderFunction, options);
```

-   `builderFunction: (dialogHelper: IDialogHelper) => any`

    This is a function that takes a helper object provided by the `DialogProvider` and should return the component to show in the dialog.
    The `dialogHelper` parameter is an object which provides the dialog's `dismiss` method:

    -   `dismiss: (returnValue?: any) => void`

        This function closes the dialog. If it is called with a return value, it will be passed to `options.onDialogDismissed` (if declared)

-   `options: IDialogOptions`

    This is a configuration object for the dialog. It contains the following properties:

    -   `size?: DialogSize`

        Controls the maximum width of the dialog. It can be `DialogSize.SMALL`, `DialogSize.MEDIUM` or `DialogSize.WIDE`.
        It defaults to `DialogSize.SMALL`

    -   `onDialogDismissed?: (returnedValue?: any) => void`

        If provided, this function will be called when the `dismiss` function is.
        If `dismiss` is called with a value, the value will be passed into this function also.

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/provider/dialog-provider/index.stories.tsx)

## Sidenotes

> DialogProvider only controls the positioning and display of your dialogs.
> The UI of the dialog is entirely up to the developer.

> The vertical margins on the dialogs can be overriden using the `--dialog-view-vertical-margin` CSS variable.

```css
body {
    .dialog-view {
        --dialog-view-vertical-margin: 75px;
    }
}
```

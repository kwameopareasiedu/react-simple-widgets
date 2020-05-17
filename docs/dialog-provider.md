[Back to components]()

# DialogProvider

The DialogProvider provides a dialog API for your app. This widget renders dialogs on top of its children.
This prevents any possible stacking context issues between the dialogs and components of your application
(especially) issues with the CSS grid system.

## API

### DialogProvider

`DialogProvider` is a wrapper for your app and provides the dialog capabilities

```jsx
ReactDOM.render(
    <DialogProvider>
        <App/> // <- Children is required
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

    -   `onDialogDismissed?: (returnedValue: any) => void`

        If your dialog returns a value and this callback is provided, it will be called with that value

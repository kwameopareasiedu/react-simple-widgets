[Home](../../README.md)

# DialogProvider API

## DialogProvider

```jsx
ReactDOM.render(
    <DialogProvider>
        <App /> // Children is a required prop
    </DialogProvider>,
    document.getElementById("root")
);
```

## DialogProviderContext

```jsx
const { showDialog } = useContext(DialogProviderContext);
```

### showDialog

`showDialog` is a function to render your component in a dialog

```jsx
showDialog(builderFunction, options);
```

-   `builderFunction: (dialogHelper: IDialogHelper) => any`

    This is a function that takes a helper object provided by the widget and should return the
    component to render in the dialog. The `dialogHelper` parameter is an object which provides
    the dialog's `dismiss` method:

    -   `dismiss: (returnValue?: any) => void`

        This function closes the dialog. If it is called with a return value, it will be passed to
        `options.onDialogDismissed` (if declared)

-   `options: { size?: DialogSize, onDialogDismissed?: (returnedValue?: any) => void, dismissOnBackgroundClick: boolean, bind: any }`

    This is a configuration object for the dialog. It contains the following properties:

    -   `size?: DialogSize = DialogSize.SMALL`

        Controls the maximum width of the dialog. It can be `DialogSize.SMALL`, `DialogSize.MEDIUM`
        or `DialogSize.WIDE`

    -   `onDialogDismissed?: (returnedValue?: any) => void`

        If provided, this function will be called when the `dismiss` function is.
        If `dismiss` is called with a value, the value will be passed into this function as well.

    -   `dismissOnBackgroundClick?: boolean`

        If set to `true`, clicking on the modal background will dismiss the current dialog.
        This defaults to `false`

    -   `bind?: any`

        The way this provider works is render dialogs above the main application. The illustration
        below depicts this:

        ```jsx
        <ProviderA>
            <DialogProvider>
                <ProviderB>
                    <App />
                </ProviderB>
            </DialogProvider>
        </ProviderA>
        ```

        This means a dialog displayed by the provider only has access to the DialogProvider context
        and all other contexts above it, **never below**.

        Suppose your dialog required a function from ProviderB, trying to access the function from
        ProviderB's context within your dialog will result in an error since that context does not
        exist at the level of the DialogProvider (where the dialog is instantiated).

        To circumvent this, your app should retrieve the required parameters from ProviderB and "hoist"
        them up to your dialog via the `bind` object.

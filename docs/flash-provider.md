[Back to components](../README.md)

# FlashProvider

The FlashProvider allows an app to display different types of flash messages. FlashProvider uses dialogs to display these
flash messages and thus depends on a [DialogProvider](./dialog-provider.md) ancestor to be available up your component tree.

## API

### FlashProvider

`FlashProvider` is a wrapper for your app and provides the flash functions

```jsx
ReactDOM.render(
    <DialogProvider> // DialogProvider is required as an ancestor
        <FlashProvider>
            <App /> // Children is a required prop
        </FlashProvider>
    </DialogProvider>,
    document.getElementById("root")
);
```

### FlashProviderContext

`FlashProviderContext` provides the various flash display functions

```jsx
const { flashInfo, flashWarning, flashError, flashSuccess } = useContext(FlashProviderContext);
```

#### flashInfo

`flashInfo` displays an information flash dialog with a blue theme

```jsx
flashInfo(title, message, onFlashDismissed);
```

-   `title: string`

    The title of the flash dialog

-   `message: string`

    The message text of the flash dialog

-   `onFlashDismissed?: () => void`

    If provided, this function will be called when the flash is dismissed by the user

#### flashSuccess

Same as [flashInfo](#flashinfo) but displays a flash dialog with a green theme

#### flashWarning

Same as [flashInfo](#flashinfo) but displays a flash dialog with a yellow theme

#### flashError

Same as [flashInfo](#flashinfo) but displays a flash dialog with a red theme

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/provider/flash-provider/index.stories.tsx)

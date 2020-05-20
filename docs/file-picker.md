[Back to components](../README.md)

# FilePicker

The FilePicker widget allows you to select a file from the device. When triggered, it launches a
dialog that allows you to either launch a file select dialog or drag and drop a file from the device.
FilePicker makes uses dialogs to provide the picker and thus requires a [DialogProvider](./dialog-provider.md)
ancestor to be available up the component tree.

## API

### FilePicker

File picker is a [controlled widget](https://reactjs.org/docs/forms.html#controlled-components) so
your app can define it's state.

```jsx
<FilePicker file={file} label={label} decoration={decoration} extensions={extensions} limit={limit} validator={validator} onChange={onChange} />
```

-   `file: File`

    The selected file of the widget

-   `label? string`

    The label to display on the widget

-   `decoration?: FieldDecoration`

    The type of decoration to use on the picker. It can be one be `FieldDecoration.NONE`,
    `FieldDecoration.FLAT`, `FieldDecoration.UNDERLINE` or `FieldDecoration.FLOATING_LABEL`

-   `extensions?: Array<string>`

    The list of valid extensions. If specified and the selected file's extension is not included, an
    error message is displayed and the select button is disabled.

    > The extensions should not start with a dot (I.e. Use `["jpg", "png"]`, not `[".jpg", ".png"]`)

-   `limit?: number`

    This is the maximum file size **in bytes**. The picker will display an error message if the
    selected file's size exceeds this number.

-   `validator?: (file: File) => string`

    An optional validator function. It should return a string which is the error message or `null`
    otherwise

-   `onChange: (file: File) => void`

    This function is called with the selected file when the user finalizes by pressing the select
    button

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/picker/file-picker/index.stories.tsx)

## Sidenotes

> The hover color can be overriden using the `--file-picker-dialog-hover-color` CSS variable.

> The error color can be overriden using the `--file-picker-dialog-error-color` CSS variable.

```css
body {
    .react-simple-widget.file-picker {
        --file-picker-dialog-hover-color: blueviolet;
        --file-picker-dialog-error-color: #ff5555;
    }
}
```

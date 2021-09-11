[Home](../../../README.md) / FilePicker

# FilePicker

This widget allows you to select a file from the device either from a file-select dialog or by drag-n-drop. `FilePicker` is intrinsically a `div` element and accepts all of its attributes.

`FilePicker` uses dialogs to display the file selection prompt. This requires a [DialogProvider](../dialog-provider/dialog-provider-usage.md) ancestor to be available up your widget tree.

## Usage

```jsx
import { DialogProvider, FilePicker } from "react-simple-widgets";

<DialogProvider>
	<FilePicker
        limit={limit}
        extensions={extensions}
        validator={validator}
        onChange={onChange}
    />
</DialogProvider>
```

- `limit?: number`

  This is the maximum file size **in bytes**. The picker will display an error message if the selected file's size exceeds this number.

- `extensions?: Array<string>`

  The list of valid extensions. If specified, and the selected file's extension is not included, an error message is displayed and the select button is disabled.

  > The extensions should not start with a dot (I.e. Use `["jpg", "png"]`, not `[".jpg", ".png"]`)

-   `validator?: (file: File) => string`

    An optional validator function which is passed the selected file. It should return a string which is the error message or `null` otherwise
    
-   `onChange?: (file: File) => void`

    This function is called with the selected file when the user finalizes by pressing the select button

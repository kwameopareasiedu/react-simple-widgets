[Home](../../../README.md) / FileField

# FileField

This widget is a file picker form widget. 

`FileField` is intrinsically a [FilePicker](../file-picker/file-picker-usage.md) widget and accepts all of its attributes.

> `FilePicker` uses dialogs to display the file selection prompt. This requires a [DialogProvider](../dialog-provider/dialog-provider-usage.md) ancestor to be available up your widget tree.

## Usage

```jsx
import { DialogProvider } from "react-simple-widgets/dist/dialog-provider";
import { FileField } from "react-simple-widgets/dist/file-field";

<DialogProvider>
    <FileField name label helper leading trailing />;
</DialogProvider>;
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `helper?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `leading?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `trailing?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

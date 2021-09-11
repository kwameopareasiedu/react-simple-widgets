[Home](../../../README.md) / FileField

# FileField

This widget is a file picker form widget. `FileField` is intrinsically a [FilePicker](../file-picker/file-picker-usage.md) widget and accepts all of its attributes.

## Usage

```jsx
import { FileField } from "react-simple-widgets";

<FileField
    name={name}
    label={label}
    helper={helper}
    leading={leading}
    trailing={trailing}
/>
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

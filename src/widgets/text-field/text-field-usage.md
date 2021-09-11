[Home](../../../README.md) / TextField

# TextField

This widget is a simple text input form widget. `TextField` is intrinsically an `input` element and accepts all of its attributes.

## Usage

```jsx
import { TextField } from "react-simple-widgets";

<TextField
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

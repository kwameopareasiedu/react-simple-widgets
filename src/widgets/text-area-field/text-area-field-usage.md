[Home](../../../README.md) / TextAreaField

# TextAreaField

This widget is a text form widget. `TextAreaField` is intrinsically a `textarea` element and accepts all of its attributes.

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

-   `leading?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

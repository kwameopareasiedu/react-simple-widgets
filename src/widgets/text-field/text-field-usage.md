[Home](../../../README.md)

# TextField

This widget is a simple text input form widget. Since it is intrinsically an input, it accepts all attributes of an `<input/>` tag.

## Usage

```jsx
import { TextField } from "react-simple-widgets";

<TextField
    name={name}
    label={label}
    leading={leading}
    trailing={trailing}
    helper={helper}
/>
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `leading?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

[Home](../../../README.md)

# PasswordField

This widget is a simple password input form widget. Since it is intrinsically an input, it accepts all attributes of an `<input/>` tag.

## Usage

```jsx
import { PasswordField } from "react-simple-widgets";

<PasswordField
    name={name}
    label={label}
    leading={leading}
    helper={helper}
/>
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `leading?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

## Sidenotes

> The `type` attribute is omitted because it is controlled internally by `PasswordField`.

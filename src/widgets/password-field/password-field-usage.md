[Home](../../../README.md) / PasswordField

# PasswordField

This widget is a password form widget. PasswordField is intrinsically an `input` element and accepts all its attributes.

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

## Side Notes

> The `type` attribute cannot be set externally because it is controlled internally by `PasswordField`.

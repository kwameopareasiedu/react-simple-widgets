[Home](../../../README.md) / DropdownField

# DropdownField

This widget is a form widget which allows the user to select a value from a dropdown list. `DropdownField` is intrinsically a `select` element and accepts all of its attributes.

## Usage

```jsx
import { DropdownField } from "react-simple-widgets";

<DropdownField
    name={name}
    label={label}
    helper={helper}
    leading={leading}
    trailing={trailing}>
    <option value="value1">Value 1</option>
    <option value="value2">Value 2</option>
</DropdownField>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `helper?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `leading?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

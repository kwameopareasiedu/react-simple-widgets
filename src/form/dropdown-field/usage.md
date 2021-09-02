[Home](../../../README.md)

# DropdownField

This widget is a form widget which allows the user to select a value from a dropdown list

## Usage

```jsx
import { DropdownField } from "react-simple-widgets";

<DropdownField
    name={name}
    label={label}
    leading={leading}
    trailing={trailing}
    decoration={decoration}
    stickyFloatingLabel={stickyFloatingLabel}
    errorTransformer={errorTransformer}>
    <option value="value1">Value 1</option>
    <option value="value2">Value 2</option>
</DropdownField>;
```

> This widget is intrinsically an `<select />` component and accepts all other attributes of
> `select` tags in addition to the ones specified here.

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    See [FieldDecoration docs](../../widgets/field-decoration/field-decoration-usage.md)

-   `decoration?: FieldDecoration`

    See [FieldDecoration docs](../../widgets/field-decoration/field-decoration-usage.md)

-   `stickyFloatingLabel?: boolean`

    See [FieldDecoration docs](../../widgets/field-decoration/field-decoration-usage.md)

-   `leading?: any`

    See [FieldDecoration docs](../../widgets/field-decoration/field-decoration-usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../../widgets/field-decoration/field-decoration-usage.md)

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../../widgets/custom-field/custom-field-usage.md)

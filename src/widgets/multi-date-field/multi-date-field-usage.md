[Home](../../../README.md) / MultiDateField

# MultiDateField

This widget is a multi-date picker form widget. `MultiDateField` it is intrinsically a [MultiDatePicker](../multi-date-picker/multi-date-picker-usage.md) widget and accepts all of its attributes.

## Usage

```jsx
import { MultiDateField } from "react-simple-widgets";

<MultiDateField
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

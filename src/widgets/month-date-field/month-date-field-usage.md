[Home](../../../README.md) / MonthDateField

# MonthDateField

This widget is a month date picker form widget. `MonthDateField` is intrinsically a [MonthDatePicker](../month-date-picker/month-date-picker-usage.md) widget and accepts all of its attributes.

## Usage

```jsx
import { MonthDateField } from "react-simple-widgets";

<MonthDateField
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

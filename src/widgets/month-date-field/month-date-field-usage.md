[Home](../../../README.md)

# MonthDateField

This widget is a date picker input form widget. Since it is intrinsically a MonthDateField widget, it accepts all attributes of an `<MonthDateField/>` tag.

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

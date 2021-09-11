[Home](../../../README.md) / DateField

# DateField

This widget is a date picker form widget. `DateField` is intrinsically a [DatePicker](../date-picker/date-picker-usage.md) widget and accepts all its attributes.

## Usage

```jsx
import { DateField } from "react-simple-widgets";

<DateField
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

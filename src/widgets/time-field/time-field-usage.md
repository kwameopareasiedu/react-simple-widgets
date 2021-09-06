[Home](../../../README.md)

# TimeField

This widget is a time picker form widget. TimeField is intrinsically a `<TimePicker/>` widget and accepts all of its attributes.

## Usage

```jsx
import { TimeField } from "react-simple-widgets";

<TimeField
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

[Home](../../../README.md)

# CheckboxField

This widget is a check input form widget. Since it is intrinsically a checkbox, it accepts all attributes of an `<input/>` tag.

## Usage

```jsx
import { CheckboxField } from "react-simple-widgets";

<CheckboxField name={name} label={label} />
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- ](../field-decoration/field-decoration-usage.md)

## Sidenotes

> The `type` attribute is omitted because it is set to `checkbox` internally.


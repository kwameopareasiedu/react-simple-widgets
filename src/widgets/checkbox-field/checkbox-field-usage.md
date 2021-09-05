[Home](../../../README.md)

# CheckboxField

This widget is a checkbox form widget. CheckboxField is intrinsically an `<input type="checkbox"/>` and it accepts all of its attributes..

## Usage

```jsx
import { CheckboxField } from "react-simple-widgets";

<CheckboxField name={name} label={label} />
```

- `name: string`

  The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)


## Side Notes

> The `type` attribute cannot be set externally because it is set to `checkbox` internally.


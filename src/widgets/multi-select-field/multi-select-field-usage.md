[Home](../../../README.md) / MultiSelectField

# MultiSelectField

This widget is a form widget which allows the user select multiple value(s) from a list of options using radio inputs. `MultiSelectField` is intrinsically a `div` element and it accepts all of its attributes.

## Usage

```jsx
import { MultiSelectField } from "react-simple-widgets";

<MultiSelectField
    name={name}
    label={label}
    inline={inlne}
    options={options}
    onChange={onChange}
/>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `inline?: boolean`

    If set to `true`, the radio options will be laid out horizontally instead of vertically.

-   `options?: Array<[any, any]>`

    The list of options for the widget. Each option is a two-element array of `[label, value]`.
    
-   `onChange?: (value: any) => void`

    If specified, this function is called with the selected value.

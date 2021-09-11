[Home](../../../README.md) / SelectField

# SelectField

This widget is a form widget which allows the user select value(s) from a list of options using radio inputs. `SelectField` is intrinsically a `div` element and accepts all its attributes.

## Usage

```jsx
import { SelectField } from "react-simple-widgets";

<SelectField
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

    If set to `true`, the radio options will be rendered horizontally instead of vertically.

-   `options?: Array<[any, any]>`

    The list of options for the widget. Each option is a two-element array of `[label, value]`.
    
-   `onChange?: (value: any) => void`

    If specified, this function is called with the selected value.

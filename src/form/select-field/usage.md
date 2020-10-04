[Home](../../../README.md)

# SelectField

This widget is a form widget which allows the user select (a) value(s) from a list of options.
It can be used for a binary selection (I.e. true or false), single-value selection (using radio
buttons) or multi-value selection (using checkboxes)

## Usage

```jsx
import { SelectField } from "react-simple-widgets";

<SelectField name={name} label={label} mode={mode} options={options} errorTransformer={errorTransformer} onChange={onChange} inline={inlne} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    The label to display on the widget

-   `mode?: SelectFieldMode`

    The mode of the widget

    -   `SelectFieldMode.SINGLE` configures the widget to make a single selection from a list of
        radio buttons

    -   `SelectFieldMode.MULTI` configures the widget to make multiple selections from a list of
        checkboxes

    > If `mode` is not provided, the widget behaves as a binary select. (I.e. a checkbox)

-   `options?: Array<[string, any]>`

    The list of options for the widget. This is used when the mode is either
    `SelectFieldMode.SINGLE` or `SelectFieldMode.MULTI`. Each option is a two-element array with
    `[label, value]`

-   `onChange?: (value: any) => void`

    If specified, this function is called with the widget's value. The type depends on what `mode`
    the widget is in

    -   No specified mode will return a `boolean` value

    -   `SelectFieldMode.SINGLE` will return a value the same type as the options value

    -   `SelectFieldMode.MULTI` will return an `Array<any>` value where `any` will take on the same
        type as the options value

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../custom-field/usage.md)

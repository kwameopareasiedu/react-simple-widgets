[Home](../../../README.md)

# DateField

This widget is a form wrapper over the [DatePicker](../date-picker/usage.md)

## Usage

`DateField` is an extension of the [DatePicker](../date-picker/usage.md) widget, hence it accepts
all its props (except the `date` prop) as well as the props specified here.The `date` prop is
provided by the [Formik](https://jaredpalmer.com/formik/) holder.

```jsx
import { DateField } from "react-simple-widgets";

<DateField name={name} errorTransformer={errorTransformer} onChange={onChange} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `onChange?: (date: Array<string> | string) => void`

    If provided, this function is called when the value of the widget changes

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../custom-field/usage.md)
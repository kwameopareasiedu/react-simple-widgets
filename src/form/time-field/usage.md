[Home](../../../README.md)

# TimeField

This widget is a form wrapper over the [TimePicker](../time-picker/usage.md)

## Usage

`TimeField` is an extension of the [TimePicker](../time-picker/usage.md) widget, hence it accepts
all its props (except the `time` prop) as well as the props specified here.The `time` prop is
provided by the [Formik](https://jaredpalmer.com/formik/) holder.

```jsx
import { TimeField } from "react-simple-widgets";

<TimeField name={name} errorTransformer={errorTransformer} onChange={onChange} />;
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `onChange?: (time: Array<string> | string) => void`

    If provided, this function is called when the value of the widget changes

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../../widgets/custom-field/custom-field-usage.md)

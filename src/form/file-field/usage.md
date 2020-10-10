[Home](../../../README.md)

# FileField

This widget is a form wrapper over the [FilePicker](../file-picker/usage.md)

## Usage

`FileField` is an extension of the [FilePicker](../file-picker/usage.md) widget, hence it accepts
all its props (except the `file` props) as well as the props specified here. The `file` prop is
provided by the [Formik](https://jaredpalmer.com/formik/) holder.

```jsx
import { FileField } from "react-simple-widgets";

<FileField name={name} errorTransformer={errorTransformer} onChange = {onChange} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `onChange?: (file: File) => void`

    If provided, this function is called when the value of the widget changes

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../custom-field/usage.md)

[Home](../../../README.md)

# PasswordField

This widget is a form widget which masks text being typed into it

## Usage

`PasswordField` is an extension of the [TextField](../../widgets/text-field/text-field-usage.md) widget, hence it accepts
all its props.

```jsx
import { PasswordField } from "react-simple-widgets";

<PasswordField name={name} />;
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

[Home](../../../README.md)

# CustomField

This widget is a form field wrapper for an input component whose value is to be included in a
[Formik](https://jaredpalmer.com/formik/) form.

## Usage

```jsx
import { CustomField } from "react-simple-widgets";

<CustomField name={name} errorTransformer={errorTransformer}>
    {({ value, touched, error, setValue, setTouched, setError }) => {
        // Return custom component
    }}
</CustomField>;
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `value: any`

    The value of the widget

-   `touched: boolean`

    Determines if the component has received focus previously. This can be used to provide a
    specific styling

-   `error: any`

    The error of this component. This is usually provided by the validation schema of the form

-   `setValue: (value: any) => void`

    Sets the value of the widget

-   `setTouched: (touched: boolean) => void`

    Sets the touched state of the widget

-   `setError: (error: any) => void`

    Sets the error of the widget within the form holder. A widget with an error will prevent
    the form from submitting

-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik form and
    you can return a custom error message

---

This widget is the base for the other form widgets provided in this library. You can view each
widget's source code to see how this widget is used

-   [TextField](../text-field/index.tsx)
-   [DropdownField](../dropdown-field/index.tsx)
-   [SelectField](../select-field/index.tsx)
-   [FileField](../file-field/index.tsx)

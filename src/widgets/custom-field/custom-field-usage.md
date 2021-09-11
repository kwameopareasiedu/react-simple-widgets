[Home](../../../README.md) / CustomField

# CustomField

This widget is a form field wrapper for an input component whose value is to be included in a enclosing [Formik](https://jaredpalmer.com/formik/) form.

## Usage

```jsx
import { CustomField } from "react-simple-widgets";

<CustomField name={name} errorBuilder={errorBuilder}>
    {({ value, touched, error, setValue, setTouched, setError }) => {
        // Return custom component
    }}
</CustomField>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `value?: any`

    The value of the widget

-   `touched: boolean`

    Determines if the component has received focus previously. This can be used to provide a specific styling

-   `error?: string`

    The error of this component. This is usually provided by the validation schema of the form

-   `setValue?: (value: any) => void`

    Sets the value of the widget

-   `setTouched?: (touched: boolean) => void`

    Sets the touched state of the widget

-   `setError?: (error: any) => void`

    Sets the error of the widget within the form holder. A widget with an error will prevent the form from submitting

-   `errorBuilder?: (originalError: any) => string`

    An optional error builder function. It is passed the error (if any) from the Formik form and you can return a custom error message

## Side Notes

This widget is the base for the other form widgets provided in this library.

-   [TextField](../text-field/text-field-usage.md)
-   [TextAreaField](../text-area-field/text-area-field-usage.md)
-   [TextEditorField](../text-editor-field/text-editor-field-usage.md)
-   [PasswordField](../password-field/password-field-usage.md)
-   [DropdownField](../dropdown-field/dropdown-field-usage.md)
-   [CheckboxField](../checkbox-field/checkbox-field-usage.md)
-   [SelectField](../select-field/select-field-usage.md)
-   [MultiSelectField](../multi-select-field/multi-select-field-usage.md)
-   [DateField](../date-field/date-field-usage.md)
-   [MultiDateField](../multi-date-field/multi-date-field-usage.md)
-   [MonthDateField](../month-date-field/month-date-field-usage.md)
-   [TimeField](../time-field/time-field-usage.md)
-   [FileField](../file-field/file-field-usage.md)

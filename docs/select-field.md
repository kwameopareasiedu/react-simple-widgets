[Back to components](../README.md#form)

# SelectField

This widget is a form widget which allows the user select (a) value(s) from a list of options.
It can be used for a binary selection (I.e. true or false), single-value selection (using radio 
buttons) or multi-value selection (using checkboxes)

## API

### SelectField

```jsx
<SelectField name={name} label={label} mode={mode} options={options} errorTransformer={errorTransformer} onChange={onChange} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    The label to display on the widget
    
-   `mode?: SelectFieldMode = SelectFieldMode.BINARY`

    The mode of the widget
    
    -   `SelectFieldMode.BINARY` configures the widget to be toggle between two modes; true or false
    
    -   `SelectFieldMode.SINGLE` configures the widget to make a single selection from a list of 
    radio buttons 
    
    -   `SelectFieldMode.MULTI` configures the widget to make multiple selections from a list of
    checkboxes

-   `options?: Array<[string, string]>`

    The list of options for the widget. This is used when the mode is either 
    `SelectFieldMode.SINGLE` or `SelectFieldMode.MULTI`. Each option is a two-element array with 
    `[label, value]`
    
-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

-   `onChange?: (value: Array<string> | string | boolean) => void`

    If specified, this function is called with the widget's value. The type depends on what mode the
    widget is in 
    
## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/form/index.stories.tsx)

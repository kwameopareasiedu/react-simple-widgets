[Back to components](../README.md#form)

# DropdownField

This widget is a form widget which allows the user to select a value from a dropdown list

## API

### DropdownField

> This widget is intrinsically an `<select />` component and accepts all other attributes of 
> `select` tags in addition to the ones specified below. 

```jsx
<DropdownField name={name} label={label} decoration={decoration} errorTransformer={errorTransformer}>
    <option value="value1">Value 1</option>
    <option value="value2">Value 2</option>
</DropdownField>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    The label to display on the widget

-   `decoration?: FieldDecoration`

    The type of decoration to use on the picker. It can be one be `FieldDecoration.NONE`,
    `FieldDecoration.FLAT`, `FieldDecoration.UNDERLINE` or `FieldDecoration.FLOATING_LABEL`
    
-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/form/index.stories.tsx)

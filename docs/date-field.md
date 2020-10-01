[Home](../README.md)

# DateField

This widget is a form wrapper over the [DatePicker](../src/form/date-picker/usage.md)

## API

### DateField

Because this widget wraps the [DatePicker](../src/form/date-picker/usage.md) widget, it accepts all its props as well
as the props specified here.

It however does not accept the `date` prop as this is provided by the 
[Formik](https://jaredpalmer.com/formik/) holder.

```jsx
<DateField name={name} errorTransformer={errorTransformer} onChange={onChange} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider
    
-   `onChange?: (date: Array<string> | string) => void`

    If provided, this function is called when the value of the widget changes

-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/form/index.stories.tsx)

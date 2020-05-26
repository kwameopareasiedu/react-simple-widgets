[Home](../README.md)

# FileField

This widget is a form wrapper over the [FilePicker](file-picker.md)

## API

### FileField

Because this widget wraps the [FilePicker](file-picker.md) widget, it accepts all its props as well
as the props specified here.

It however does not accept the `file` prop as this is provided by the 
[Formik](https://jaredpalmer.com/formik/) holder.

```jsx
<FileField name={name} errorTransformer={errorTransformer} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider
    
-   `onChange?: (file: File) => void`

    If provided, this function is called when the value of the widget changes

-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/form/index.stories.tsx)

[Home](../README.md)

# TextField

This widget is a form widget which allows the use to enter text as a single line input or a
WYSIWYG editor. The editor is provided by [Quill rich text editor](https://quilljs.com/)

## API

### TextField

> This widget is intrinsically an `<input />` component and accepts all other attributes of 
> `input` tags in addition to the ones specified below. 

> As an example, you can set `type=number` with `min={0}` and `max={10}` attributes to make it a 
> number field.

```jsx
<TextField name={name} label={label} mode={mode} decoration={decoration} errorTransformer={errorTransformer} onEditorChange={onEditorChange} onEditorFocus={onEditorFocus} onEditorBlur={onEditorBlur} />
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

-   `label?: string`

    The label to display on the widget
    
-   `mode?: TextFieldMode = TextFieldMode.INPUT`

    The mode of the widget
    
    -   `TextFieldMode.INPUT` configures the widget to be single line regular `input` component
    
    -   `TextFieldMode.EDITOR` configures the widget to be a rich text editor provided by 
    [Quill rich text editor](https://quilljs.com/)

-   `decoration?: FieldDecoration`

    The type of decoration to use on the picker. It can be one be `FieldDecoration.NONE`,
    `FieldDecoration.FLAT`, `FieldDecoration.UNDERLINE` or `FieldDecoration.FLOATING_LABEL`
    
-   `errorTransformer?: (err: any) => string`

    An optional error transform function. It is passed the error (if any) from the Formik holder 
    and you can return a custom error message

-   `onEditorChange?: (value: any) => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor's value when it
    changes. For the `TextFieldMode.INPUT` mode, use the `onChange` attribute
    
-   `onEditorFocus?: () => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor receives focus.
    For the `TextFieldMode.INPUT` mode, use the `onFocus` attribute
    
-   `onEditorBlur?: () => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor loses focus.
    For the `TextFieldMode.INPUT` mode, use the `onBlur` attribute

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/form/index.stories.tsx)

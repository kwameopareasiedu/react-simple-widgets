[Home](../../../README.md)

# TextField

This widget is a form widget which allows the use to enter text as a single line input or a
WYSIWYG editor. The editor is provided by [Quill rich text editor](https://quilljs.com/)

## Usage

```jsx
<TextField
    name={name}
    label={label}
    mode={mode}
    decoration={decoration}
    errorTransformer={errorTransformer}
    stickyFloatingLabel={stickyFloatingLabel}
    leading={leading}
    trailing={trailing}
    onEditorChange={onEditorChange}
    onEditorFocus={onEditorFocus}
    onEditorBlur={onEditorBlur}
/>
```

> This widget is intrinsically an `<input />` component and accepts all other attributes of
> `input` tags in addition to the ones specified below.

> As an example, you can set `type=number` with `min={0}` and `max={10}` attributes to make it a
> number field.

```jsx
<TextField name="age" label="Enter your age" type="number" min={1} step={1} />
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

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `stickyFloatingLabel?: boolean`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `leading?: any`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `errorTransformer?: (err: any) => string`

    See [CustomField docs](../custom-field/usage.md)

-   `onEditorChange?: (value: any) => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor's value when it
    changes. For the `TextFieldMode.INPUT` mode, use the `onChange` attribute

-   `onEditorFocus?: () => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor receives focus.
    For the `TextFieldMode.INPUT` mode, use the `onFocus` attribute

-   `onEditorBlur?: () => void`

    If the `mode` is `TextFieldMode.EDITOR`, this function is called with the editor loses focus.
    For the `TextFieldMode.INPUT` mode, use the `onBlur` attribute

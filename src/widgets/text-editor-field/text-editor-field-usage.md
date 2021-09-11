[Home](../../../README.md) / TextEditorField

# TextEditorField

This widget is a WYSIWYG editor form widget which is built on top of [Quill rich text editor](https://quilljs.com/).

## Usage

```jsx
import { TextEditorField } from "react-simple-widgets";

<TextEditorField
    name={name}
    label={label}
    helper={helper}
    disabled={disabled}
    onChange={onEditorChange}
    onFocus={onEditorFocus}
    onBlur={onEditorBlur}
/>
```

-   `name: string`

    The key of the widget's value in the [Formik](https://jaredpalmer.com/formik/) provider

- `label?: string`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

- `helper?: any`

  See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `disabled?: any`

    See [FieldDecoration docs](../field-decoration/field-decoration-usage.md)

-   `onChange?: (value: any) => void`

    This function is called with the editor's value when it changes.
    
-   `onFocus?: () => void`

    This function is called when the editor receives focus.
    
-   `onBlur?: () => void`

    This function is called when the editor loses focus.

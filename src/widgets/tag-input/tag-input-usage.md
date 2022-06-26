[Home](../../../README.md) / TagInput

# TagInput

This widget allows multiple tags to be entered into the text input using the **Enter** or **Tab** keys.

`TagInput` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { TagInput } from "react-simple-widgets/dist/tag-input";

<TagInput value validator onChange onInputError />;
```

- `value: Array<string>`

  The array of text tags.

- `displayFormat?: string`

  The format to display the selected date. Defaults to `ddd, Do MMM YYYY` (E.g. Fri, 15th Apr 2022).

- `validator?: (date: string) => string?`

  When the **Enter** or **Tab** is pressed and this is specified, the current text input value is passed to this function. This function should return a string error message or null if no error. If an error message is returned, `onInputError` is called with the error message instead of `onChange`.

- `onInputError?: (error: string) => void`

  When validation fails for this widget, the error message is passed to this function, if specified.

- `onChange: (tags: Array<string>) => void`

  This function is called with the **new array** of tags when a new tag is added.

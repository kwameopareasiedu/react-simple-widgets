[Home](../../../README.md)

# TimePicker

The `TimePicker` widget allows you to select a time using a picker dialog. Since it uses a dialog to
provide the picker and thus requires a [DialogProvider](../../dialog-provider/usage.md)
ancestor to be available up the component tree.

## Usage

This widget is a [controlled widget](https://reactjs.org/docs/forms.html#controlled-components) so
your app can define it's state.

```jsx
import { TimePicker } from "react-simple-widgets";

<TimePicker
    time={time}
    label={label}
    error={error}
    leading={leading}
    trailing={trailing}
    decoration={decoration}
    stickyFloatingLabel={stickyFloatingLabel}
    validator={validator}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
/>;
```

-   `time: string | Array<String>`

    The selected time of the widget

-   `label?: string`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `decoration?: FieldDecoration`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `leading?: any`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `trailing?: any`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `stickyFloatingLabel?: boolean`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `error?: string`

    See [FieldDecoration docs](../field-decoration/usage.md)

-   `validator?: (time: string) => string`

    An optional validator function. It should return a string which is the error message or `null`
    otherwise

-   `onChange: (time: string) => void`

    This function is called with the selected time when the user finalizes by pressing the select
    button

-   `onFocus?: () => void`

    If provided, the widget calls this function anytime it receives focus

-   `onBlur?: () => void`

    If provided, the widget calls this function anytime it loses focus

[Home](../README.md)

# TimePicker

The `TimePicker` widget allows you to select a time using a picker dialog. Since it uses a dialog to
provide the picker and thus requires a [DialogProvider](./dialog-provider.md) ancestor to be
available up the component tree.

## API

### TimePicker

This widget is a [controlled widget](https://reactjs.org/docs/forms.html#controlled-components) so
your app can define it's state.

```jsx
<TimePicker time={time} label={label} decoration={decoration} error={error} validator={validator} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
```

-   `time: string | Array<String>`

    The selected time of the widget

-   `label?: string`

    The label to display on the widget

-   `decoration?: FieldDecoration`

    The type of decoration to use on the picker. It can be one be `FieldDecoration.NONE`,
    `FieldDecoration.FLAT`, `FieldDecoration.UNDERLINE` or `FieldDecoration.FLOATING_LABEL`

-   `error?: string`

    An optional error message to show under the widget

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

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/picker/time-picker/index.stories.tsx)

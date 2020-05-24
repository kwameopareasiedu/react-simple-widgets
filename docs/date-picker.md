[Back to components](../README.md)

# DatePicker

The `DatePicker` widget allows you to select a date using a picker dialog. Since it uses a dialog to 
provide the picker and thus requires a [DialogProvider](./dialog-provider.md) ancestor to be 
available up the component tree.

## API

### DatePicker

This widget is a [controlled widget](https://reactjs.org/docs/forms.html#controlled-components) so
your app can define it's state.

```jsx
<DatePicker mode={mode} date={date} label={label} decoration={decoration} error={error} format={format} displayFormat={displayFormat} validator={validator} onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
```

-   `mode?: DatePickerMode = DatePicker.SINGLE`

    The mode of the picker
    
    -   `DatePicker.SINGLE` - Configures the widget to select a single date
    
    -   `DatePicker.MULTI` - Configures the widget to select multiple dates
    
    -   `DatePicker.MONTH` - Configures the widget to select a month. In this mode, the day
    component of the date is always set to 1.

-   `date: string | Array<String>`

    The selected date of the widget. This is a **string** if `mode` is set to `DatePicker.SINGLE` or
    `DatePicker.MONTH`. It should be an array of dates if `mode` is set to `DatePicker.MULTI`

-   `label?: string`

    The label to display on the widget

-   `decoration?: FieldDecoration`

    The type of decoration to use on the picker. It can be one be `FieldDecoration.NONE`,
    `FieldDecoration.FLAT`, `FieldDecoration.UNDERLINE` or `FieldDecoration.FLOATING_LABEL`
    
-   `error?: string`

    An optional error message to show under the widget

-   `format?: Array<string> = "YYYY-MM-DD"`

    This is the date format for use within the widget. It is also the format the `date` prop should
    be in. The widget will also return the selected date in this format

-   `displayFormat?: string = "dddd, Do MMMM YYYY"`

    This is the format for the display of the selected date(s). This only affects the display of the
    dates. See the documentation on [Moment](https://momentjs.com/docs/#/parsing/string-format/) 
    for supported formats.

-   `validator?: (date: string) => string`

    An optional validator function. It should return a string which is the error message or `null`
    otherwise

-   `onChange: (date: string | Array<string>) => void`

    This function is called with the selected date(s) when the user finalizes by pressing the select
    button
    
-   `onFocus?: () => void`

    If provided, the widget calls this function anytime it receives focus
    
-   `onBlur?: () => void`

    If provided, the widget calls this function anytime it loses focus

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/picker/date-picker/index.stories.tsx)

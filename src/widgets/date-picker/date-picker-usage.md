[Home](../../../README.md) / DatePicker

# DatePicker

This widget displays a popup calendar to select a single calendar date. `DatePicker` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { DatePicker } from "react-simple-widgets/dist/date-picker";

<DatePicker value={value} displayFormat={displayFormat} validator={validator} onChange={onDateSelect} />;
```

- `value: string`

  The selected date of the widget in the format `YYYY-MM-DD`.

- `displayFormat?: string`

  The format to display the selected date. Defaults to `ddd, Do MMM YYYY` (E.g. Wed, 8th Sep 2021).

- `validator?: (date: string) => string`

  If specified, the selected date is passed to this function to validate. This function should return a string error message or null if no error. If an error message is returned, `onChange` is not called with the selected date.

- `onChange: (date: string) => void`

  This function is called with the selected date when the calendar date is clicked on.

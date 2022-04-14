[Home](../../../README.md) / MonthDatePicker

# MonthDatePicker

This widget allows you to select a calendar month. `MonthDatePicker` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { MonthDatePicker } from "react-simple-widgets";

<MonthDatePicker value={value} validator={validator} onChange={onDateSelect} />;
```

- `value: string`

  The selected date of the widget in the format `YYYY-MM`.

- `validator?: (date: string) => string`

  If specified, the selected date is passed to this function to validate. This function should return a string error message or null if no error. If an error message is returned, `onChange` is not called with the selected date.

- `onChange: (date: string) => void`

  This function is called with the selected date when the calendar date is clicked on. The day part of the date is always set to `01`.

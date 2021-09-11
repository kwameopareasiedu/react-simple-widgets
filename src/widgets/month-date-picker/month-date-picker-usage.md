[Home](../../../README.md) / MonthDatePicker

# MonthDatePicker

This widget allows you to select a calendar month. `MonthDatePicker` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { MonthDatePicker } from "react-simple-widgets"; 

<MonthDatePicker
    value={value}
    onChange={onDateSelect}
/>
```

-   `value: string`

    The selected date of the widget in the format `YYYY-MM`.
    
-   `onChange: (date: string) => void`

    This function is called with the selected date when the calendar date is clicked on. The day part of the date is always set to `01`.

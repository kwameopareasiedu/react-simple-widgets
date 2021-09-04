[Home](../../../README.md)

# MonthDatePicker

This widget allows you to select a calendar month. Since it is intrinsically a div element, it accepts all attributes of the `<div/>` widget.

## Usage

```jsx
import { MonthDatePicker } from "react-simple-widgets"; 

<MonthDatePicker
    date={date}
    onDateSelect={onDateSelect}
/>
```

-   `date: string`

    The selected date of the widget in the format `YYYY-MM`.
    
-   `onDateSelect: (date: string) => void`

    This function is called with the selected date when the calendar date is clicked on. The day part of the date is always set to `01`.

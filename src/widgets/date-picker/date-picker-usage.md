[Home](../../../README.md) / DatePicker

# DatePicker

This widget displays a popup calendar to select a single calendar date. `DatePicker` is intrinsically a `div` element and accepts all of its attributes.

## Usage

```jsx
import { DatePicker } from "react-simple-widgets"; 

<DatePicker
    value={value}
    displayFormat={displayFormat}
    onChange={onDateSelect}
/>
```

-   `value: string`

    The selected date of the widget in the format `YYYY-MM-DD`.
    
-   `displayFormat?: string`

    The format to display the selected date. Defaults to `ddd, Do MMM YYYY` (E.g. Wed, 8th Sep 2021).

- `onChange: (date: string) => void`

  This function is called with the selected date when the calendar date is clicked on.

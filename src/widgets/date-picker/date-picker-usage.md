[Home](../../../README.md)

# DatePicker

This widget displays a popup calendar to select a single calendar date. DatePicker is intrinsically a `<div/>` element and accepts all of its attributes.

## Usage

```jsx
import { DatePicker } from "react-simple-widgets"; 

<DatePicker
    date={date}
    onDateSelect={onDateSelect}
/>
```

-   `date: string`

    The selected date of the widget in the format `YYYY-MM-DD`.
    
-   `onDateSelect: (date: string) => void`

    This function is called with the selected date when the calendar date is clicked on.

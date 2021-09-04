[Home](../../../README.md)

# DatePicker

This widget allows you to select a single calendar date. Since it is intrinsically a PopupMenu widget, it accepts all attributes of the `<PopupMenu/>` widget.

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

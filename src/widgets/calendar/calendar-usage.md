[Home](../../../README.md)

# Calendar

This widget displays a calendar and allows you to select a single calendar date. Since it is intrinsically a div element, it accepts all attributes of the `<div/>` tag.

## Usage

```jsx
import { Calendar } from "react-simple-widgets"; 

<Calendar
    initialDate={initialDate}
    isDateOutlined={isDateOutlined}
    isDateActive={isDateActive}
    onDateSelect={onDateSelect}
/>
```

-   `initialDate: string`

    The initial date of the widget in the format `YYYY-MM-DD`. The date must have the format `YYYY-MM-DD`.
    
-   `isDateOutlined?: (year: number, month: number, day: number) => boolean`

    During render, this function is called for every calendar day in the month. This function should return true if the calendar day should be outlined.

-   `isDateActive?: (year: number, month: number, day: number) => boolean`

    During render, this function is called for every calendar day in the month. This function should return true if the calendar day should be made active.

- `onDateSelect: (date: string) => void`

  This function is called with the selected date when the calendar date is clicked on. The date has the format `YYYY-MM-DD`.
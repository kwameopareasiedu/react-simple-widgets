[Home](../../../README.md)

# Calendar

This widget displays a calendar which allows you to select dates.

Calendar is intrinsically a `<div/>` element and accepts all of its attributes.

## Usage

```jsx
import { Calendar } from "react-simple-widgets/dist/calendar";

<Calendar initialDate isDateOutlined isDateActive validator onChange />;
```

- `initialDate: string`

  The initial date of the widget in the format `YYYY-MM-DD`. The date must have the format `YYYY-MM-DD`.

- `isDateOutlined?: (year: number, month: number, day: number) => boolean`

  During render, this function is called for every calendar day in the month. This function should return true if the calendar day should be outlined.

- `isDateActive?: (year: number, month: number, day: number) => boolean`

  During render, this function is called for every calendar day in the month. This function should return true if the calendar day should be active.

- `validator?: (date: string) => string`

  If specified, the selected date is passed to this function to validate. This function should return a string error message or `null` if no error. If an error message is returned, `onChange` will not called with the selected date.

- `onChange: (date: string) => void`

  This function is called with the selected date when the calendar date is clicked on. The date has the format `YYYY-MM-DD`.

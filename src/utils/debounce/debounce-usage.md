[Home](../../../README.md) / debounce

# debounce

Debounce a specified function. Debouncing limits the number of times a function is called within a specified time period.

As an example, let's assume we have an action that calls a specific function several times a second. If the called function is supposed to call an API endpoint, this may trigger rate limiting on the server. As such, the function should be debounced. This makes it such that, the rate at which the function is actually called is much lower that the caller is triggering.

This way, the action can be triggering the function at 100 times per second, but the debounced version will only be called once no new triggers have occurred after 1 second

## Usage

```tsx
import { debounce } from "react-simple-widgets";

debounce(label, function, delay);
```

-   `label: string`

    The unique label for this function. This is used to identify the function in the function pool

-   `function: Function`

    The function to be debounced

-   `delay: number`

    The debounce delay of the function in milliseconds (ms)

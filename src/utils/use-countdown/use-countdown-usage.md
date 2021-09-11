[Home](../../../README.md) / useCountdown

# useCountdown

This is a React [hook](https://reactjs.org/docs/hooks-intro.html) that provides a counts down from an initial value to 0. It returns a state array containing the following values in this order:

- Countdown (`number`)
- Running (`boolean`)
- Stop countdown timer (`Function`)
- Reset countdown timer (`Function`)

## Usage

```jsx
import { useCountdown } from "react-simple-widgets";

export function CountdownUsage() {
    const [ count, running, stopCountdown, resetCountdown ] = useCountdown(delay);

    return null;
}
```

-   `delay: number`

    The duration of the countdown in seconds

-   `count: number`

    The numeric count state variable

-   `running: boolean`

    The running status of the countdown. If the countdown ends, this will be `false` and vice-versa

-   `stopCountdown: () => void`

    This function stops the countdown
    
-   `resetCountdown: () => void`

    This function starts the countdown if not running and resets it if it is already running

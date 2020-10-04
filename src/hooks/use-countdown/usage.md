[Home](../../../README.md)

# useCountdown

useCountdown is a React [hook](https://reactjs.org/docs/hooks-intro.html) that provides a countdown
(number), a running (boolean) and a countdown reset timer to implement a countdown in your app

## Usage

```jsx
import { useCountdown } from "react-simple-widgets";

export function CountdownUsage() {
    const { count, running, resetCountdown } = useCountdown(delay);

    return null;
}
```

-   `countdown: number`

    The duration of the countdown in seconds

-   `count: number`

    The count state variable

-   `running: boolean`

    The running status of the countdown. If the countdown ends, this will be false and vice-versa

-   `resetCountdown: () => void`

    This function starts the countdown if not running and resets it if it is running

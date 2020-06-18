[Home](../README.md)

# useCountdown

useCountdown is a React [hook](https://reactjs.org/docs/hooks-intro.html) that provides a countdown
(number), a running (boolean) and a countdown reset timer to implement a countdown in your app

## API

### useCountdown

```jsx
const { countdown, running, resetCountdown } = useCountdown(delay);
```

-   `delay: number`

    The duration of the countdown in seconds

-   `countdown: number`

    The countdown state variable

-   `running: boolean`

    The running status of the countdown. If the countdown ends, this will be false and vice-versa

-   `resetCountdown: () => void`

    This function starts the countdown if not running and resets it if it is running

## Usage

A complete usage can be found in the [Storybook stories for this widget](../src/misc/use-countdown/index.stories.tsx)

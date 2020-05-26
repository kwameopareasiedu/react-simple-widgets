[Home](../README.md)

# BusyButton

BusyButton is a button widget that displays a spinner when busy is true. Since it is intrinsically a
button, it accepts all attributes of a `<button/>` tag

## API

### BusyButton

```jsx
<BusyButton busy={busy} />
```

-   `busy?: boolean = false`

    If set to true, the button is disabled and a spinner icons is displayed within i

## Usage

A complete usage can be found in the [Storybook stories for the form using this widget](../src/misc/busy-button/index.stories.tsx)

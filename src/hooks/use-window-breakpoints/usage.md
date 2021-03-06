[Home](../../../README.md)

# useWindowBreakpoints

useWindowBreakpoints is a React [hook](https://reactjs.org/docs/hooks-intro.html) that allow your
app to be aware of the current window width category. The categories are computed using
[Bootstrap's breakpoints](https://getbootstrap.com/docs/4.0/layout/grid/)

## Usage

```jsx
import { useEffect } from "react";
import { useWindowBreakpoints } from "react-simple-widgets";

export function WindowBreakpointsUsage() {
    const { xs, sm, md, lg, xl, width } = useWindowBreakpoints();

    useEffect(() => {
        // Query parameters have changed
    }, [xs, sm, md, lg, xl, width]);

    return null;
}
```

-   `xs: boolean`

    Indicates the window width is **extra-small** (less than 540px)

-   `sm: boolean`

    Indicates the window width is **small** (Between 540px and 720px)

-   `md: boolean`

    Indicates the window width is **medium** (Between 720px and 960px)

-   `lg: boolean`

    Indicates the window width is **large** (Between 960px and 1140px)

-   `xl: boolean`

    Indicates the window width is **extra-large** (Above 1140px)

-   `width: number`

    The current `innerWidth` of the window

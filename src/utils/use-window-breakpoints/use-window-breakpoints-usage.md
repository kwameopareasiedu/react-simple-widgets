[Home](../../../README.md) / useWindowBreakpoints

# useWindowBreakpoints

This is a React [hook](https://reactjs.org/docs/hooks-intro.html) that allow your app to be aware of the current window width category. The categories are computed using [Bootstrap's breakpoints](https://getbootstrap.com/docs/5.1/layout/breakpoints/#available-breakpoints)

## Usage

```jsx
import { useEffect } from "react";
import { useWindowBreakpoints } from "react-simple-widgets";

export function WindowBreakpointsUsage() {
    const { xs, sm, md, lg, xl, xxl, width } = useWindowBreakpoints();

    useEffect(() => {
        // Window width category has changed
    }, [xs, sm, md, lg, xl, xxl, width]);

    return null;
}
```

-   `xs: boolean`

    Indicates the window width is **extra-small** (less than 576px)

-   `sm: boolean`

    Indicates the window width is **small** (Between 576px and 768px)

-   `md: boolean`

    Indicates the window width is **medium** (Between 768px and 992px)

-   `lg: boolean`

    Indicates the window width is **large** (Between 992px and 1200px)

- `xl: boolean`

  Indicates the window width is **extra-large** (Between 1200px and 1400px)

- `xxl: boolean`

  Indicates the window width is **extra-extra-large** (Above 1400px)

-   `width: number`

    The current `innerWidth` of the window

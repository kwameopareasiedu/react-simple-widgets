[Home](../../../README.md)

# useQueryParams

useQueryParams is a React [hook](https://reactjs.org/docs/hooks-intro.html) that parses the URL
search string and returns a state object containing the data which updates when the URL does

## Usage

```jsx
import { useEffect } from "react";
import { useQueryParams } from "react-simple-widgets";

export function QueryParamsUsage() {
    const qp = useQueryParams();

    useEffect(() => {
        // Query parameters have changed
    }, [qp]);

    return null;
}
```

> `qp` is a state object that contains the query parameters currently in the query string of the url

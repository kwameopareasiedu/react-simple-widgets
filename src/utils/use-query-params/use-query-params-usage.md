[Home](../../../README.md) / useQueryParams

# useQueryParams

This is a React [hook](https://reactjs.org/docs/hooks-intro.html) that parses the URL search string and returns a state object containing the data which updates when the URL does

## Usage

```jsx
// https://my-awesome-site.com?key1=value1&key2=value2&key3=value3

import { useEffect } from "react";
import { useQueryParams } from "react-simple-widgets";

export function QueryParamsUsage() {
    const qp = useQueryParams();

    useEffect(() => {
        console.log(qp);
        /* 
        	Query parameters have changed
        	qp = { 
        		key1: value1, 
        		key2: value2, 
        		key3: value3 
        	}
        */
    }, [qp]);

    return null;
}
```

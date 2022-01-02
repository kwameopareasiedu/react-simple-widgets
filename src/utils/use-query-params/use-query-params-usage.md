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

- `qp.set: (key: string, value: string) => void`

  The function that adds a query parameter to the current URL which changes the URL in the browser's address bar. 

  >If the current URL is `https://awesomesite.com/public`, calling `qp.set("foo", "bar")` will change the URL to `https://awesomesite.com/public?foo=bar`

- `qp.unset: (key: string) => void`

  The function that removes a query parameter from the current URL which changes the URL in the browsers address bar. 

  >If the current URL is `https://awesomesite.com/public?foo=bar`, calling `qp.unset("foo")` will change the URL to `https://awesomesite.com/public`
